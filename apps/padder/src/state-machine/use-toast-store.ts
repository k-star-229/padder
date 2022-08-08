import create from "zustand"
import { combine } from "zustand/middleware"

export type toastTypes = "success" | "error" | "info" | "unknown"

export type toast = {
	title?: string
	description?: string
	show?: boolean
	type?: toastTypes
}

export const useToastStore = create(
	combine(
		{
			toast: {} as toast,
		},
		set => ({
			showToast: (payload: toast): any =>
				set(x => ({
					toast: payload,
				})),
			hideToast: (): any =>
				set(x => ({
					toast: {
						show: false,
					} as toast,
				})),
		})
	)
)
