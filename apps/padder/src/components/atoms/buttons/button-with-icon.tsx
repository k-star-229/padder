import { FcGoogle } from "react-icons/fc"
import { MdFacebook } from "react-icons/md"
import styled from "styled-components"

import { ButtonTitleBlack, ButtonWithIconWrapper, Flex } from "./style"

interface ButtonWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	Icon: React.ReactNode
	color?: string
	onClick: () => void
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	title,
	Icon,
	color,
	onClick,
	...rest
}) => {
	return (
		<ButtonWithIconWrapper color={color} {...rest} onClick={onClick}>
			<Flex>
				<>
					{Icon}
					<ButtonTitleBlack>{title}</ButtonTitleBlack>
				</>
			</Flex>
		</ButtonWithIconWrapper>
	)
}

export default ButtonWithIcon
export const FbIcon = styled(MdFacebook)`
	font-size: 1.5rem;
	width: 30%;
`
export const GoogleIcon = styled(FcGoogle)`
	font-size: 1.5rem;
	width: 30%;
`
