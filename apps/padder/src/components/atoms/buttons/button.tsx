import styled from "styled-components"

export const ButtonComp = styled.button<{ bgColor?: string }>`
	padding: 1rem 0;
	text-align: center;
	background-color: ${({ bgColor }): string => (bgColor ? bgColor : "#fff")};
	color: ${({ color }): string => (color ? color : "white")};
	border-radius: 0.875rem;
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.0625rem;
	width: 100%;
	border: none;
`
export const Button = styled.button<{
	bgColor?: string
	fontSize?: string
	weight?: string
	border?: string
	borderRadius?: string
	padding?: string
	width?: string
}>`
	padding: ${({ padding }): string => (padding ? padding : "1rem .75rem")};
	text-align: center;
	background-color: ${({ bgColor }): string => bgColor && bgColor};
	color: ${({ color }): string => (color ? color : "white")};
	border-radius: ${({ borderRadius }): string => borderRadius && borderRadius};
	font-weight: ${({ weight }): string => (weight ? weight : "500")};
	font-size: ${({ fontSize }): string => (fontSize ? fontSize : "1rem")};
	width: ${({ width }): string => width && width};
	border: ${({ border }): string => (border ? border : "2px solid black")};
`
