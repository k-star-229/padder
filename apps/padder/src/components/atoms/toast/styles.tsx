import styled from "styled-components"

export const ToasterWrapper = styled.div<{
	show?: boolean
	toastColor: string
}>`
	display: ${({ show }): string => (show ? "block" : "none")};
	position: fixed;
	width: 100vw;
	top: 0;
	min-height: ${({ show }): string => (show ? "5em" : "0")};
	background-color: ${({ toastColor }): string => (toastColor ? toastColor : "grey")};
	padding: 2em;
	color: white;
	transition: all 2s;
	transition-timing-function: ease-in-out;
`

export const ToasterTitle = styled.div`
	font-size: 1rem;
	font-weight: 300;
	margin-left: 5px;
`

export const ToasterDescription = styled.div``
