import Image from "next/image"

import {
	BgColor,
	CodeWrapper,
	ItemAlignments,
	MarginB,
	MarginT,
	OverFlowScroll,
	Padding,
} from "../../../styles/global"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import PrimaryText from "../../atoms/text-component"

interface ScheduleCardProps {
	amount?: any
	payment?: any
	srcpath?: string
	smalltext?: string
	textdes?: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
	amount,
	payment,
	srcpath,
	smalltext,
	textdes,
}) => {
	return (
		<MarginB className='mt-0 md:mt-16'>
			<OverFlowScroll className='no-scrollbar'>
				<CodeWrapper className='rounded-xl bg-white w-80 min-w-[320px] shadow-md'>
					<Padding padding='1rem 0 1rem 1rem'>
						<ItemAlignments justifyContent='space-between' columnGap='.75rem'>
							<Image src={srcpath} alt='alt-text' width={"35"} height={"46"} />
							<CodeWrapper>
								<ItemAlignments columnGap='1rem'>
									<PrimaryText size='sm' height='md'>
										{amount}
									</PrimaryText>
									<BgColor color='var(--orange-400)'>
										<Padding padding='2px'>
											<PrimaryText
												size='xxs'
												weight='bolder'
												height='xs'
												align='center'
												color='light'
											>
												{smalltext}
											</PrimaryText>
											<PrimaryText
												size='xxs'
												weight='normal'
												height='xs'
												align='center'
												color='light'
											>
												{textdes}
											</PrimaryText>
										</Padding>
									</BgColor>
								</ItemAlignments>
								<PrimaryText size='sm' height='md'>
									{payment}
								</PrimaryText>
							</CodeWrapper>
						</ItemAlignments>
						<MarginT>
							<ItemAlignments columnGap='1rem'>
								<BottomButton
									title='PAY EARLY'
									bgColor='var(--btn-primary)'
									lineHeight='1.25rem'
									padding='.625rem 0'
									borderRadius='14px'
								/>
								<BottomButton
									title='PAID RENT'
									bgColor='var(--purple-100)'
									lineHeight='1.25rem'
									padding='.625rem 0'
									borderRadius='14px'
								/>
							</ItemAlignments>
						</MarginT>
					</Padding>
				</CodeWrapper>
			</OverFlowScroll>
		</MarginB>
	)
}
export default ScheduleCard
