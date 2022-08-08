/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { cloneElement } from "react"
import styled, { createGlobalStyle } from "styled-components"

import { StyledIconsType } from "../lib/types/style-types"

export const FontStyles = createGlobalStyle`
  body {
    box-sizing: border-box !important;
    font-family: 'Poppins', serif;
    margin: 0;
    padding: 0;
  }
`
export const RedText = styled.span`
	color: var(--secondary);
	font-weight: 700;
	cursor: pointer;
	margin-left: 2px;
`
export const SpaceY = styled.div<{
	space?: string
}>`
	& > div {
		margin-bottom: ${({ space }) => (space ? space : "1rem")};
	}
`
type LayoutProps = {
	padding?: string
	bgColor?: string
}

export const Layout = styled.div<LayoutProps>`
	background: ${({ bgColor }) => (bgColor ? bgColor : "#FBFBFB")};
	min-height: 100vh;
	padding: ${({ padding }) => padding && padding};
`
export const StyleContainer = styled.section<{ padding?: string }>`
	padding: ${({ padding }) => (padding ? padding : "var(--stylecontainer)")};
	width: 100%;
	position: relative;
`
export const BgColor = styled.div<{ color?: string; borderRadius?: string }>`
	background-color: ${({ color }) => (color ? color : "#fff")};
	border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
`

export const MarginY = styled.div<{
	space?: string
}>`
	margin: ${({ space }) => (space ? space : "1rem")} 0;
`
export const PaddingY = styled.div<{
	space?: string
}>`
	padding: ${({ space }) => (space ? space : "1rem")} 0;
	height: 100%;
`

export const MarginT = styled.div<{
	space?: string
	minHeight?: string
}>`
	margin-top: ${({ space }) => (space ? space : "1rem")};
	min-height: ${({ minHeight }) => minHeight};
`
export const MarginB = styled.div<{ space?: string }>`
	margin-bottom: ${({ space }) => (space ? space : "1rem")};
`
export const MarginS = styled.div<{ space?: string }>`
	margin-left: ${({ space }) => (space ? space : "1rem")};
`
export const marginE = styled.div<{ space?: string }>`
	margin-left: ${({ space }) => (space ? space : "1rem")};
`

export const Flex = styled.div`
	display: flex;
	height: 100%;
`
export const FlexAlt = styled.div`
	display: flex;
`

export const Padding = styled.div<{ padding?: string }>`
	padding: ${({ padding }) => (padding ? padding : "1rem")};
`
export const Image = styled.img<{ width?: string; height?: string }>`
	width: ${({ width }) => (width ? width : "100%")};
	height: ${({ height }) => (height ? height : "100%")};
`

export const JustifyBetween = styled(Flex)<{
	minHeight?: string
}>`
	align-items: stretch;
	height: ${({ minHeight }) => minHeight} !important;
	flex-direction: column;
	justify-content: space-between;
	& > div {
		flex: 1;
	}
`
export const MinHeight = styled.div<{
	minHeight: string
}>`
	min-height: ${({ minHeight }) => minHeight};
`
export const StyledIcon = styled(({ icon, ...props }) =>
	cloneElement(icon, props)
)<StyledIconsType>`
	font-size: ${({ fontSize }) => {
		return fontSize ? fontSize : "1.5em"
	}};
	color: ${({ color }) => (color ? color : "")};
	${({ fontWeight }) => (fontWeight ? fontWeight : "")};
`

export const HOCWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	text-align: center;
`
export const CodeWrapper = styled.div``
export const HOCBottomWrapper = styled.div<{
	height?: string | number
	bgColor?: string
}>`
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: ${({ bgColor }) => (bgColor ? bgColor : "white")};
`
export const HOCTopWrapper = styled.div<{
	height?: string | number
	bgColor?: string
}>`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: ${({ bgColor }) => (bgColor ? bgColor : "white")};
`
export const ItemAlignments = styled.div<{
	display?: string
	justifyContent?: string
	alignItems?: string
	maxWidth?: string
	direction?: string
	columnGap?: string
	height?: string
}>`
	display: ${({ display }) => (display ? display : "flex")};
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : "center"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
	column-gap: ${({ columnGap }) => (columnGap ? columnGap : "0rem")};
	flex-direction: ${({ direction }) => direction && direction};
	height: ${({ height }) => height && height};
`
export const PaddingT = styled.div<{
	space?: string
}>`
	padding-top: ${({ space }) => (space ? space : "1rem")};
`
export const Width = styled.div<{ width?: string; space?: string }>`
	width: ${({ width }) => (width ? width : "100%")};
	margin: ${({ space }) => space && space};
`
export const TextCenter = styled.div<{ textCenter?: string }>`
	text-align: ${({ textCenter }) => (textCenter ? textCenter : "center")};
`
export const OverFlowScroll = styled.section<{ OverFlow?: string }>`
	overflow: ${({ OverFlow }) => (OverFlow ? OverFlow : "auto")};
	display: flex;
	column-gap: 0.75rem;
`
export const Boldtext = styled.span<{ fontWeight?: string }>`
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
	color: #000;
`
export const Seperator = styled.div<{
	height?: string
	bgColor?: string
	space?: string
}>`
	width: 100%;
	height: ${({ height }) => (height ? height : "1px")};
	background: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
	margin: ${({ space }) => (space ? space : "1rem")};
`
export const GroupButton = styled.button<{
	active?: boolean
	borderRadius?: string
}>`
	font-size: 13px;
	background: ${({ active }) => (active ? "var(--purple-100)" : "#fff")};
	border: 1px solid
		${({ active }) => (active ? "var(--purple-100)" : "var(--gray-150)")};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
	padding: 0.75rem;
	text-align: center;
	width: 100%;
	font-weight: 700;
	color: ${({ active }) => (active ? "#fff" : "#000")};
`
