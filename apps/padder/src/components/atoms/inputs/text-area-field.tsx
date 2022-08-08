/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ForwardedRef, forwardRef } from "react"
import { InputHTMLAttributes } from "react"

import Label from "../label"
import { Error, Input } from "./style"

type RefTypes = HTMLTextAreaElement
export interface InputFieldProps extends InputHTMLAttributes<RefTypes> {
	bgColor?: string
	borderColor?: string
	error?: {
		message?: string
	}
	label?: string
	borderRadius?: string
	children?: React.ReactNode
}

// eslint-disable-next-line react/display-name
export const TextAreaField = forwardRef<RefTypes, InputFieldProps>(
	({ label, error, ...rest }, ref) => {
		return (
			<>
				{label ? (
					<Label
						title={label}
						fontSize='0.7rem'
						weight='600'
						paddings='0.5rem 0 0 0'
					/>
				) : (
					""
				)}
				<textarea
					ref={ref as ForwardedRef<HTMLTextAreaElement>}
					className={`rounded-lg border my-2 p-2`}
					{...rest}
				/>
				<Error>{error?.message}</Error>
			</>
		)
	}
)
