import styled from "styled-components"

export const HeadingTitle = styled.h2<{ color: string }>`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 600;
	padding: 1rem 0 0.5rem 0;
	color: ${({ color }): string => (color ? color : "#090a0a")};
	margin: 0;
`
