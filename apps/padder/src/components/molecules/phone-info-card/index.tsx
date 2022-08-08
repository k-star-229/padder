import Image from "next/image"

import { ItemAlignments } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface PhoneInfoCardProps {
	phone?: string
}

export const PhoneInfoCard: React.FC<PhoneInfoCardProps> = ({ phone }) => (
	<ItemAlignments justifyContent='start' columnGap='1.25rem'>
		<Image
			src={"/svg/phone-icon.svg"}
			alt='alt-text'
			width={"30"}
			height={"30"}
		/>
		<PrimaryText size='lg' height='lg' color='info'>
			{phone}
		</PrimaryText>
	</ItemAlignments>
)
