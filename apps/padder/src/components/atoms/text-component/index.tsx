import styled from "styled-components"

interface TextProps {
	size?: "xxs" | "xs" | "sm" | "md" | "semi-md" | "lg" | "xl" | "xxl" | "xxxl"
	height?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
	weight?: "lighter" | "normal" | "medium" | "bold" | "bolder" | "extra-bold"
	color?:
		| "light"
		| "dark"
		| "seconadry"
		| "warning"
		| "info"
		| "gray"
		| "textdark"
	align?: "start" | "center" | "end"
	transform?: "captalized" | "small" | "large"
	children?: React.ReactNode
}
interface StyledTextProps {
	size?: string
	height?: string
	weight?: string
	color?: string
	align?: string
	transform?: string
}

const PrimaryText: React.FC<TextProps> = ({
	size,
	height,
	weight,
	color,
	align,
	transform,
	children,
}) => {
	const TextStyleconf = {
		size: "",
		height: "",
		weight: "",
		color: "",
		align: "",
		transform: "",
	}
	switch (size) {
		case "xxs":
			TextStyleconf.size = "9px"
			break
		case "xs":
			TextStyleconf.size = ".75rem"
			break
		case "sm":
			TextStyleconf.size = "15px"
			break
		case "md":
			TextStyleconf.size = "1rem"
			break
		case "semi-md":
			TextStyleconf.size = "17px"
			break
		case "lg":
			TextStyleconf.size = "1.25rem"
			break
		case "xl":
			TextStyleconf.size = "1.5rem"
			break
		case "xxl":
			TextStyleconf.size = "2.125rem"
			break
		case "xxxl":
			TextStyleconf.size = "2.5rem"
			break
	}
	switch (height) {
		case "xs":
			TextStyleconf.height = ".625rem"
			break
		case "sm":
			TextStyleconf.height = "14px"
			break
		case "md":
			TextStyleconf.height = "1.125rem"
			break
		case "lg":
			TextStyleconf.height = "1.5rem"
			break
		case "xl":
			TextStyleconf.height = "2rem"
			break
		case "xxl":
			TextStyleconf.height = "3.125rem"
			break
	}
	switch (color) {
		case "light":
			TextStyleconf.color = "#fff"
			break
		case "dark":
			TextStyleconf.color = "#000"
			break
		case "seconadry":
			TextStyleconf.color = "var(--secondary-100)"
			break
		case "warning":
			TextStyleconf.color = "var(--orange-400)"
			break
		case "info":
			TextStyleconf.color = "var(--purple-100)"
			break
		case "gray":
			TextStyleconf.color = "var(--gray-300)"
			break
		case "textdark":
			TextStyleconf.color = "var(--green-500)"
			break
	}
	switch (weight) {
		case "lighter":
			TextStyleconf.weight = "300"
			break
		case "normal":
			TextStyleconf.weight = "400"
			break
		case "medium":
			TextStyleconf.weight = "500"
			break
		case "bold":
			TextStyleconf.weight = "600"
			break
		case "bolder":
			TextStyleconf.weight = "700"
			break
		case "extra-bold":
			TextStyleconf.weight = "800"
			break
	}
	switch (align) {
		case "start":
			TextStyleconf.align = "start"
			break
		case "center":
			TextStyleconf.align = "center"
			break
		case "end":
			TextStyleconf.align = "end"
			break
	}
	switch (transform) {
		case "captalized":
			TextStyleconf.transform = "capitalize"
			break
		case "small":
			TextStyleconf.transform = "lowercase"
			break
		case "large":
			TextStyleconf.transform = "uppercase"
			break
	}

	return <StyledText {...TextStyleconf}>{children}</StyledText>
}

export default PrimaryText

export const StyledText = styled.div<StyledTextProps>`
	color: ${({ color }): string => color};
	font-size: ${({ size }): string => size};
	line-height: ${({ height }): string => height};
	font-weight: ${({ weight }): string => weight};
	text-align: ${({ align }): string => align};
	text-transform: ${({ transform }): string => transform};
`
