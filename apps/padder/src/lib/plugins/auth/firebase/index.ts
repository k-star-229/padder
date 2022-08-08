/* eslint-disable no-console */
import { initializeApp } from "firebase/app"
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	User,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth"
import {
	DocumentData,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	limit,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	where,
} from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"

import { setLocalstorage } from "../../../../helpers/wrappers"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIRE_APP_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIRE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIRE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIRE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIRE_MESSANGING_SENDER,
	appId: process.env.NEXT_PUBLIC_FIRE_APP_ID,
}

export interface FirebaseChannelInterface {
	lastMessage: string
	name: string
	"user-1": string
	"user-2": string
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const SaveUserInFirestore = async (
	displayName?: string
): Promise<void> => {
	const user = firebaseAuth.currentUser
	await setDoc(doc(firestore, "users", user.uid), {
		name: user.displayName ? user.displayName : displayName,
		user_id: user.uid,
	})
}

export const FirebaseFacebookSignIn = (cb: (user: User) => void): void => {
	const provider = new FacebookAuthProvider()

	signInWithPopup(firebaseAuth, provider)
		.then(result => {
			const user = result.user

			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			const credential = FacebookAuthProvider.credentialFromResult(result)
			const accessToken = credential.accessToken
			if (accessToken) {
				SaveUserInFirestore()
				setLocalstorage("user", JSON.stringify(user))
				cb(user)
			}
		})
		.catch(error => {
			// Handle Errors here.
			const errorMessage = error.message
			console.log("errorMessage", errorMessage)
		})
}

export const FirebaseGoogleSignIn = (cb: (res: User) => void): void => {
	const GoogleProvider = new GoogleAuthProvider()
	signInWithPopup(firebaseAuth, GoogleProvider)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result)
			const token = credential.accessToken
			if (token) {
				SaveUserInFirestore()
				setLocalstorage("user", JSON.stringify(result.user))
				cb(result.user)
			}
		})
		.catch(error => {
			// Handle Errors here.
			const errorMessage = error.message
		})
}

export const FirebaseEmailPasswordSignup = (
	email: string,
	password: string,
	username: string,
	cb: (user: User) => void
): void => {
	createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then(userCredential => {
			const user = userCredential.user
			if (user) {
				setLocalstorage("user", JSON.stringify(user))
				updateProfile(user, {
					displayName: username,
				})
				SaveUserInFirestore(username)
				cb(user)
			}
		})
		.catch(error => {
			const errorMessage = error.message
			console.log("errorMessage", errorMessage)
		})
}

export const FirebaseEmailSignIn = (
	email: string,
	password: string,
	cb: (user: User, error) => void
): void => {
	signInWithEmailAndPassword(firebaseAuth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user
			if (user) {
				setLocalstorage("user", JSON.stringify(user))
				cb(user, undefined)
			}
		})
		.catch(error => {
			cb(undefined, error)
		})
}

export const FirebaseEditProfile = (
	fieldToChange: {
		[key: string]: string
	},
	cb
): void => {
	updateProfile(firebaseAuth.currentUser, fieldToChange)
		.then(() => {
			cb()
		})
		.catch(e => {
			console.log("e", e)
		})
}

export const FirebaseSignOut = async (cb: () => void): Promise<void> => {
	signOut(firebaseAuth).then(() => {
		localStorage.removeItem("user")
		cb()
	})
}

/**
 * Use firestore to build fireChat
 */
export const channelRef = collection(firestore, "chat")
export const unsub = onSnapshot(doc(firestore, "chat", "channels"), doc => {
	const source = doc.metadata.hasPendingWrites ? "Local" : "Server"
})

export const FirebaseGetAllUsers = async (): Promise<DocumentData[]> => {
	const users = []
	const { currentUser } = firebaseAuth

	const usersRef = collection(firestore, "users")
	const q = query(usersRef, where("user_id", "!=", currentUser.uid))
	const data = await getDocs(q)

	data.forEach(d => {
		users.push(d.data())
	})
	return users
}

export const FirebaseGetChannel = async (): Promise<DocumentData[]> => {
	return new Promise(async resolve => {
		const channels = []

		const channelRef = collection(firestore, "channels")
		// const userRef = collection(firestore, "users")
		const q = query(channelRef)
		const data = await getDocs(q)

		data.forEach(async d => {
			const channelData = d.data()
			channels.push({
				...channelData,
				id: d.id,
			})
		})

		resolve(channels)
	})
}

export const FirebaseGetMessages = async (
	channelId: string
): Promise<DocumentData[]> => {
	return new Promise(async resolve => {
		const messageData = []
		const messagesRef = query(
			collection(firestore, "channels", channelId, "messages")
		)

		const messages = await getDocs(messagesRef)

		messages.forEach(m => {
			messageData.push(m.data())
		})

		resolve(messageData)
	})
}

export const FirebaseSendMessage = async (
	channelId: string,
	message: string,
	type: string
): Promise<any> => {
	const { currentUser } = firebaseAuth
	const { uid, displayName, photoURL } = currentUser
	return await setDoc(
		doc(collection(firestore, `channels/${channelId}`, "messages")),
		{
			createdAt: new Date().getTime(),
			message: message,
			uid,
			displayName,
			photoURL,
			type,
		}
	)
}

export const FirebaseUploadImage = async (
	file: File,
	filePrefix: string
): Promise<string> => {
	return new Promise(resolve => {
		const FirebaseStorageRef = ref(storage, `images/${filePrefix}-${uuidv4()}`)
		return uploadBytes(FirebaseStorageRef, file).then(async snapshot => {
			const url = await getDownloadURL(FirebaseStorageRef)
			resolve(url)
		})
	})
}

export const FirebaseCreateChannel = async (): Promise<DocumentData[]> => {
	return new Promise(async resolve => {
		const { currentUser } = firebaseAuth
		const channels = []
		const unsubscribe = undefined

		const channelRef = collection(firestore, "channels")
		// const userRef = collection(firestore, "users")
		const q = query(channelRef)
		// const data = await getDocs(q)
		// await setDoc(q)

		resolve(channels)
	})
}
