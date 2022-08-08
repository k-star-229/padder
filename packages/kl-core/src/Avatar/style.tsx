import styled from "styled-components"

interface StyledAvatarWrapperProps {
	img: string | undefined
	active?: boolean
}

export const StyledAvatarImg = styled.div`
	height: 2.25rem;
	width: 2.25rem;
`

export const StyledAvatarWrapper = styled.div<StyledAvatarWrapperProps>`
	border-radius: 100%;
	background: ${props => (!props.img ? "var(--gray-100)" : "")};
	border: ${({ active }) =>
		active ? "2px solid green" : "2px solid transparent"};
`
export const StyledIconWrapper = styled.div`
	background: var(--gray-100);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.25rem;
	width: 2.25rem;
	border-radius: 100%;
`
