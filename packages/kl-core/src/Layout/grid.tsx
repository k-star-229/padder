import * as React from "react"
import styled from "styled-components"

import { KlDivType } from "../system-types/kl-div.type"

export interface GridProps extends KlDivType {
	children: [React.ReactNode] | React.ReactNode
	/***
	 * This property is equal to gridTemplateColumn
	 */
	gridTemplateColumns?: string
}

const GridDiv = styled.div<GridProps>`
	display: grid;
	grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
	background-color: ${({ gridTemplateColumns }) => gridTemplateColumns};
`

export const Grid: React.FC<GridProps> = ({
	gridTemplateColumns,
	__className,
	children,
}) => {
	return (
		<GridDiv>
			{Array.isArray(children) ? children.map((c) => c) : children}
		</GridDiv>
	)
}
