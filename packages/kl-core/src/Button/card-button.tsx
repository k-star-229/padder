import * as React from "react"

export interface CardButtonProps {
	children?: React.ReactNode
	title: string
}

export const CardButton: React.FC<CardButtonProps> = ({ children, title }) => {
	return (
		<div className={"bg-gray-400 group flex p-4"}>
			<div>{children}</div>
			<span className={"text-primary group-hover:text-white self-end"}>
				{title}
			</span>
		</div>
	)
}
