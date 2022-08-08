import create from "zustand"
import { combine } from "zustand/middleware"

interface UserFormState {
	phoneNumber: number | null
	setPhoneNumber: (newState: number) => void
}

export const useUserForm = create<UserFormState>(
	combine(
		{
			phoneNumber: null,
		},
		set => ({
			setPhoneNumber: (newState: number): void => {
				return set(() => ({
					phoneNumber: newState,
				}))
			},
		})
	)
)
