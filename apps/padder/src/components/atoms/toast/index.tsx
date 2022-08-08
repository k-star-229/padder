import React from "react"
import {
	BsFillCheckSquareFill,
	BsInfoSquareFill,
	BsXSquareFill,
} from "react-icons/bs"

import { useToastStore } from "../../../state-machine/use-toast-store"
import { ItemAlignments, StyledIcon } from "../../../styles/global"
import { ToasterDescription, ToasterTitle, ToasterWrapper } from "./styles"

export type toastTypes = "success" | "error" | "info" | "unknown"

export const ToastCustom: React.FC = () => {
	const { toast, hideToast } = useToastStore()

	React.useEffect(() => {
		if (!toast?.show) {
			return undefined
		}
		const timer = setTimeout(() => {
			hideToast()
		}, 7000)

		return (): void => {
			clearTimeout(timer)
		}
	}, [toast])

	let Icon = BsInfoSquareFill

	const getToastColor = (type: toastTypes): string => {
		let color = "grey"
		switch (type) {
			case "error":
				Icon = BsXSquareFill
				color = "var(--red-200)"
				break
			case "success":
				Icon = BsFillCheckSquareFill
				color = "var(--green-50-75)"
				break
			case "info":
				Icon = BsInfoSquareFill
				color = "var(--primary)"
				break
			default:
				Icon = BsInfoSquareFill
				color = "var(--gray-150)"
				break
		}
		return color
	}

	return (
		<ToasterWrapper toastColor={getToastColor(toast.type)} show={toast.show}>
			<ItemAlignments>
				<StyledIcon icon={<Icon />} color={"white"} />
				<ToasterTitle>{toast.title}</ToasterTitle>
			</ItemAlignments>
			<ToasterDescription>{toast.description}</ToasterDescription>
		</ToasterWrapper>
	)
}
