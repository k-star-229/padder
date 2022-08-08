import create from "zustand"
import { combine } from "zustand/middleware"

type ModalProps = {
	title?: string
	description?: string
	show?: boolean
	children?: React.ReactNode
}

export const useModalStore = create(
	combine(
		{
			modal: {} as ModalProps,
		},
		set => ({
			showModal: (payload: ModalProps): any => {
				return set(x => ({
					modal: payload,
				}))
			},
			hideModal: (): any =>
				set(x => ({
					modal: {
						show: false,
					} as ModalProps,
				})),
		})
	)
)
