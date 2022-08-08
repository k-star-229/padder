import {
	FirebaseEditProfile,
	FirebaseEmailPasswordSignup,
	FirebaseEmailSignIn,
	FirebaseFacebookSignIn,
	FirebaseGetAllUsers,
	FirebaseGetChannel,
	FirebaseGetMessages,
	FirebaseGoogleSignIn,
	FirebaseSendMessage,
	FirebaseSignOut,
	FirebaseUploadImage,
	firebaseAuth,
	firestore,
} from "./auth/firebase"

const using = "firebase"

let EmailPasswordSignUp = undefined
let EmailPasswordSignIn = undefined
let FacebookSignUp = undefined
let GoogleSignIn = undefined
let EditProfile = undefined
let auth = undefined
let logout = undefined
let GetChatUsers = undefined
let GetChannelList = undefined
let GetMessages = undefined
let db = undefined
let SendMessage = undefined
let UploadImage: (file: File, filePrefix: string) => Promise<string> = undefined

if (using === "firebase") {
	FacebookSignUp = FirebaseFacebookSignIn
	GoogleSignIn = FirebaseGoogleSignIn
	auth = firebaseAuth
	EmailPasswordSignUp = FirebaseEmailPasswordSignup
	EmailPasswordSignIn = FirebaseEmailSignIn
	EditProfile = FirebaseEditProfile
	logout = FirebaseSignOut
	GetChatUsers = FirebaseGetAllUsers
	GetChannelList = FirebaseGetChannel
	GetMessages = FirebaseGetMessages
	db = firestore
	SendMessage = FirebaseSendMessage
	UploadImage = FirebaseUploadImage
}

export {
	FacebookSignUp,
	GoogleSignIn,
	EmailPasswordSignUp,
	EmailPasswordSignIn,
	EditProfile,
	auth,
	logout,
	GetChatUsers,
	GetChannelList,
	GetMessages,
	db,
	SendMessage,
	UploadImage,
}
