import Image from "next/image"

import { ItemAlignments, Padding } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface VerificationCardProps {
	title?: string
	title2?: string
}

const VerificationCard: React.FC<VerificationCardProps> = ({
	title,
	title2,
}) => {
	return (
		<Padding padding='1.5rem 0'>
			<ItemAlignments justifyContent='space-around'>
				<ItemAlignments columnGap='10px'>
					<Image
						src='/svg/verified-icon.svg'
						alt='Edit'
						width={"30"}
						height={"30"}
					/>
					<PrimaryText transform='large' weight='lighter' size='lg' height='md'>
						{title}
					</PrimaryText>
				</ItemAlignments>
				<ItemAlignments columnGap='10px'>
					<Image
						src='/svg/verified-icon.svg'
						alt='Edit'
						width={"30"}
						height={"30"}
					/>
					<PrimaryText transform='large' weight='lighter' size='lg' height='md'>
						{title2}
					</PrimaryText>
				</ItemAlignments>
			</ItemAlignments>
		</Padding>
	)
}
export default VerificationCard
