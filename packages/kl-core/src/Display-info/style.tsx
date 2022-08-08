import styled from "styled-components"

import { EmptyProps } from "./empty"

export const InfoText = styled.span<{
	type: EmptyProps["type"]
}>`
	color: ${({ type }) =>
		type === "error"
			? "red"
			: type === "info"
			? "blue"
			: type === "success"
			? "green"
			: type === "warning"
			? "mustard"
			: "red"};
`

export const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 100%;
	height: 100%;
`
