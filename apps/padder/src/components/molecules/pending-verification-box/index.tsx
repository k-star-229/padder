import Image from "next/image"

import { CodeWrapper } from "../../../styles/global"
import Label from "../../atoms/label"

interface IconProps {
	src: string
	title: string
	color?: string
}

const PendingVerificaionBox: React.FC<IconProps> = ({ src, title, color }) => {
	return (
		<CodeWrapper>
			<Image src={src} alt='alt-text' width={"96"} height={"96"} />
			<Label
				title={title}
				fontSize='40px'
				lineHeight='48px'
				textAlign='center'
				color={color}
			/>
		</CodeWrapper>
	)
}
export default PendingVerificaionBox
