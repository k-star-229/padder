import Image from "next/image"

import {
	BgColor,
	ItemAlignments,
	MarginY,
	Padding,
	Width,
} from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface MaintenanceRequestCardProps {
	title?: string
}

export const MaintenanceRequestCard: React.FC<MaintenanceRequestCardProps> = ({
	title,
}) => {
	return (
		<MarginY space='.75rem 0 .5rem'>
			<Width width='80%'>
				<BgColor className='rounded-[10px] shadow-1'>
					<Padding padding='1.125rem 0.75rem'>
						<ItemAlignments columnGap='.5rem'>
							<Image
								src={"/svg/hammer-icon.svg"}
								alt='alt-text'
								width={"35"}
								height={"35"}
							/>
							<PrimaryText size='xs' color='seconadry' weight='medium'>
								{title}
							</PrimaryText>
						</ItemAlignments>
					</Padding>
				</BgColor>
			</Width>
		</MarginY>
	)
}
