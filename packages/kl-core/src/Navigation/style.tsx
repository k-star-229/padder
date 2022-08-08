import { cloneElement } from "react"
import styled from "styled-components"

export const StyledNavs = styled.section`
	display: flex;
	width: 100%;
	justify-content: space-around;
	padding: 10px 0 8px;
	position: fixed;
	bottom: 0;
	background: #fff;
`
export const NavTabs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20%;
`
export const NavTitle = styled.h4`
	color: #0e2f60;
	font-size: 12px;
	font-weight: normal;
	margin: 0;
	margin-top: 0.25rem;
`
export const StyledIcon = styled(({ icon, ...props }) => {
	return cloneElement(icon, props)
})<{
	fontSize?: string
	colorScheme?: any
}>`
	font-size: ${({ fontSize }) => {
		return fontSize ? fontSize : "1.5em"
	}};
	${({ colorScheme }) =>
		colorScheme && colorScheme.iconColor
			? `color: ${colorScheme.iconColor}`
			: ""};
`
