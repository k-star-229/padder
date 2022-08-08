import Image from "next/image"

import { BgColor, ItemAlignments, Padding } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface HouseLeaseCardProps {
	title?: string
}

const HouseLeaseCard: React.FC<HouseLeaseCardProps> = ({ title }) => {
	return (
		<BgColor borderRadius='10px'>
			<Padding padding='.5rem 0'>
				<ItemAlignments justifyContent='space-evenly'>
					<Image
						src={"/svg/house-icon.svg"}
						alt='alt-text'
						width={"50"}
						height={"50"}
					/>
					<PrimaryText weight='medium' size='lg' height='lg'>
						{title}
					</PrimaryText>
				</ItemAlignments>
			</Padding>
		</BgColor>
	)
}

export default HouseLeaseCard
