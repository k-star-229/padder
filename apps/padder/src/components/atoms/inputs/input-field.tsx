/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ForwardedRef, forwardRef } from "react"
import { InputHTMLAttributes } from "react"

import Label from "../label"
import { Error, Input } from "./style"

type RefTypes = HTMLInputElement
export interface InputFieldProps extends InputHTMLAttributes<RefTypes> {
	bgColor?: string
	borderColor?: string
	error?: {
		message?: string
	}
	label?: string
	borderRadius?: string
}

// eslint-disable-next-line react/display-name
export const InputField = forwardRef<RefTypes, InputFieldProps>(
	({ bgColor, borderColor, label, borderRadius, error, ...rest }, ref) => {
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
				{/* @ts-ignore */}
				<Input
					error={error?.message}
					ref={ref as ForwardedRef<HTMLInputElement>}
					borderRadius={borderRadius}
					bgColor={bgColor}
					className={"rounded-lg"}
					borderColor={borderColor}
					{...rest}
				/>
				<Error>{error?.message}</Error>
			</>
		)
	}
)
