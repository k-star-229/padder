import Image from "next/image"

import { ItemAlignments, MarginB } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface EmailCardProps {
	email?: string
}

export const EmailCard: React.FC<EmailCardProps> = ({ email }) => (
	<MarginB space='.75rem'>
		<ItemAlignments justifyContent='start' columnGap='1.25rem'>
			<Image
				src={"/svg/email-icon.svg"}
				alt='alt-text'
				width={"30"}
				height={"30"}
			/>
			<PrimaryText size='lg' height='lg' color='info'>
				{email}
			</PrimaryText>
		</ItemAlignments>
	</MarginB>
)
