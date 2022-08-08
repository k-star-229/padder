import styled from "styled-components"

export const ButtonGroup = styled.section`
	width: 100%;
	padding: 0.3rem 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	column-gap: 1rem;
`
export const ButtonLeft = styled.div`
	text-align: center;
	min-width: 40%;
	max-width: 40%;
`
export const CancelButton = styled.button`
	background: var(--gray-100);
	color: var(--gray-150);
	padding: 1.125rem 2.875rem;
	font-size: 1.063rem;
	border-radius: 0.875rem;
	line-height: 1.625rem;
	width: 100%;
`
export const CompleteButton = styled.button`
	background: var(--secondary);
	color: #fff;
	padding: 1.125rem 2rem;
	font-size: 1.063rem;
	border-radius: 0.875rem;
	line-height: 1.625rem;
	width: 100%;
	font-weight: 700;
`
export const ButtonWithIconWrapper = styled.div<{
	color?: string
}>`
	padding: 1rem 0;
	text-align: center;
	background-color: ${({ color }): string => (color ? color : "#fff")};
	border: ${({ color }): string => (!!color ? "" : "0.125rem solid #e6e5e4")};
	color: ${({ color }): string => (!!color ? "white" : "black")};
	border-radius: 0.625rem;
	cursor: pointer;
`
export const Flex = styled.div`
	display: flex;
	align-items: center;
`
export const ButtonTitleBlack = styled.div`
	width: 70%;
	text-align: start;
	font-weight: 500;
`

export const BottomButtons = styled.div`
	position: absolute;
	bottom: 10px;
	width: 100%;
	margin: 0;
	padding: 0;
	right: 0 !important;
`
