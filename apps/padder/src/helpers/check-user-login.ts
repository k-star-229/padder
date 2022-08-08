import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { useEffect } from "react"

import { auth } from "../lib/plugins/plugin-manager"

interface UserData {
	displayName: string
	email: string
	isVerfied?: boolean
	uid: string
	photoURL: string
}

type ResponseT = {
	user: UserData
	isLoggedIn: boolean
	loading?: boolean
	token?: string
}

export const useCheckUserLogin = (): ResponseT => {
	const [response, setResponse] = useState<ResponseT>()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		onAuthStateChanged(auth, async user => {
			if (user) {
				const token = await auth.currentUser.getIdToken()
				if (!response) {
					setResponse({
						user,
						isLoggedIn: !!user,
						token,
					})
					setLoading(false)
				} else {
					setLoading(true)
				}
			} else {
				setResponse({
					user,
					isLoggedIn: !!user,
				})
				setLoading(false)
			}
		})
	}, [])
	return {
		...response,
		loading,
	}
}
