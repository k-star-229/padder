import { toast } from "../state-machine/use-toast-store"

export const handleAuthError = (
	error,
	showToast: (payload: toast) => void
): any => {
	let message = ""
	switch (error.code) {
		case "auth/email-already-in-use":
			message = "Email already exists"
			break
		case "auth/wrong-password":
			message = "Incorrect credentials, Try again"
		default:
			message = error.message ? error.message : "Something went wrong"
			break
	}
	showToast({
		title: message,
		show: true,
		type: "error",
	})
}
