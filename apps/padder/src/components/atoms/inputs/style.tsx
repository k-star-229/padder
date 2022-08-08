/* eslint-disable max-len */
import styled from "styled-components"

export const Error = styled.div`
	color: red;
`

export const Input = styled.input<{
	bgColor?: string
	borderColor?: string
	error?: string
	borderRadius?: string
}>`
	height: 3.5rem;
	background: var(--dust);
	width: 100%;
	padding-left: 20px;
	font-size: 17px;
	margin: 0.5rem 0 1rem;
	box-sizing: border-box;
	outline: none;
	&:focus {
		border: 1.5px solid
			${({ borderColor, error }): string =>
				error ? "var(--red-200)" : borderColor ? borderColor : "var(--dust)"};
	}
`
