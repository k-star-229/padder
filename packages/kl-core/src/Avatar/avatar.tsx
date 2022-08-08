/* eslint-disable @next/next/no-img-element */
import cx from "classnames"
import * as React from "react"

export interface AvatarProps {
	img?: string
	alt?: string
	size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
	children?: React.ReactNode
	caption?: string
}

export const Avatar: React.FC<AvatarProps> = ({
	alt,
	children,
	img,
	size,
	caption,
}) => {
	const avatarClass = cx(
		{ "h-6 w-6": size === "xs" },
		{ "h-14 w-14": size === "sm" },
		{ "h-16 w-16": size === "md" },
		{ "h-24 w-24": size === "lg" },
		{ "h-44 w-44": size === "xl" },
		{ "h-64 w-64": size === "xxl" },
		{ "bg-gray-200": children }
	)
	return (
		<div className={`rounded-full cursor-pointer ${avatarClass}`}>
			<div
				className={`${
					caption ? "flex-col" : "flex"
				} h-full w-full rounded-full justify-center items-center`}
			>
				<>
					{img ? (
						<>
							<img
								className={"h-full w-full rounded-full"}
								src={img}
								alt={alt}
							/>
							<div className={"text-center font-mono text-sm"}>
								{caption ? caption : ""}
							</div>
						</>
					) : children ? (
						children
					) : (
						""
					)}
				</>
			</div>
		</div>
	)
}
