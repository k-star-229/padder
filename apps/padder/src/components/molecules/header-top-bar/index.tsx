import Image from "next/image"

import {
	BgColor,
	HOCTopWrapper,
	ItemAlignments,
	Padding,
} from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

export const TopHeaderBar: React.FC = () => {
	return (
		<HOCTopWrapper className='block md:hidden'>
			<BgColor color='#FBFBFB'>
				<Padding
					padding='1.125rem 1rem'
					style={{
						boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
					}}
				>
					<ItemAlignments justifyContent='space-between'>
						<PrimaryText size='xs' height='sm' weight='bolder'>
							Padder Rent
						</PrimaryText>
						<ItemAlignments columnGap='0.5rem'>
							<PrimaryText size='xs' height='sm' weight='normal'>
								Get $20 off your rent!
							</PrimaryText>
							<Image
								src='/svg/gift-logo.svg'
								alt='alt-text'
								width={"28"}
								height={"28"}
							/>
						</ItemAlignments>
					</ItemAlignments>
				</Padding>
			</BgColor>
		</HOCTopWrapper>
	)
}
