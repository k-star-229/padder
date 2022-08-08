import cx from "classnames"
import * as React from "react"

export interface GroupProps {
	children: [React.ReactNode] | React.ReactNode
	justifyStyle?: "between" | "around" | "center" | "none"
	__className?: string
}

export const Group: React.FC<GroupProps> = ({
	justifyStyle,
	children,
	__className,
}) => {
	const groupClass = cx(
		{ "justify-between": justifyStyle === "between" },
		{ "justify-around": justifyStyle === "around" },
		{ "justify-center space-x-4": justifyStyle === "center" },
		{ "": justifyStyle === "none" },
		{ [`${__className}`]: __className }
	)
	return (
		<div
			className={`flex items-center px-2 flex-wrap ${
				Array.isArray(children) ? groupClass : "justify-center"
			}`}
		>
			{Array.isArray(children)
				? children.map((c) => {
						return c
				  })
				: children}
		</div>
	)
}
