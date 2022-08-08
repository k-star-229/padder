import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

interface ButtonTitle extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	onClick?: any
	bgColor?: string
	borderRadius?: string
	padding?: string
	lineHeight?: string
	weight?: string
}
export const BottomButton: FC<ButtonTitle> = ({
	title,
	onClick,
	bgColor,
	borderRadius,
	padding,
	lineHeight,
	weight,
	...rest
}) => {
	return (
		<Button
			onClick={onClick}
			borderRadius={borderRadius}
			bgColor={bgColor}
			padding={padding}
			lineHeight={lineHeight}
			weight={weight}
			{...rest}
		>
			{title}
		</Button>
	)
}

const Button = styled.button<{
	bgColor: string
	borderRadius: string
	padding: string
	lineHeight?: string
	weight?: string
}>`
	background: ${({ bgColor }): string => (bgColor ? bgColor : "var(--btn-secondary)")};
	text-align: center;
	width: 100%;
	padding: ${({ padding }): string => (padding ? padding : "0.75rem 0")};
	color: #fff;
	font-size: 1.125rem;
	border: none;
	border-radius: ${({ borderRadius }): string =>
		borderRadius ? borderRadius : "0.75rem"};
	line-height: ${({ lineHeight }): string => (lineHeight ? lineHeight : "1.75rem")};
	font-weight: ${({ weight }): string => (weight ? weight : "400")};
`
