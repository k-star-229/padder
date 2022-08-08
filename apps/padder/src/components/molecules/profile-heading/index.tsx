import React from "react"

import { MarginB } from "../../../styles/global"
import { PrimaryHeading } from "../../atoms/primary-heading"
import PrimaryText from "../../atoms/text-component"

interface HeadingProps {
	title?: string
	color?: "light" | "dark" | "seconadry" | "warning" | "info" | "gray"
	children?: any;
}
export const ProfileHeading: React.FC<HeadingProps> = ({
	children,
	title,
	color,
}) => {
	return (
		<>
			<PrimaryHeading title={title} color={color} />
			<MarginB space='1.5rem'>
				<PrimaryText size='md' height='lg' weight='normal' color='gray'>
					{children}
				</PrimaryText>
			</MarginB>
		</>
	)
}
