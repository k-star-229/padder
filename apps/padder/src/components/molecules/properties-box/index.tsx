import {
	CodeWrapper,
	ItemAlignments,
	MarginB,
	MarginT,
	OverFlowScroll,
	Padding,
	TextCenter,
	Width,
} from "../../../styles/global"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import PrimaryText from "../../atoms/text-component"

interface PropertiesCardProps {
	title?: string
	payment?: JSX.Element
	date?: JSX.Element
	name?: JSX.Element
	smalltext?: string
	coloredtext?: string
}

const PropertiesCard: React.FC<PropertiesCardProps> = ({
	title,
	payment,
	date,
	name,
	smalltext,
	coloredtext,
}) => {
	return (
		<MarginT space='1.25rem'>
			<OverFlowScroll className='no-scrollbar'>
				<CodeWrapper className='rounded-xl bg-white w-80 min-w-[320px] shadow-1'>
					<Padding padding='.25rem 1.5rem .625rem'>
						<PrimaryText
							align='center'
							size='sm'
							height='lg'
							weight='bolder'
							transform='large'
						>
							{title}
						</PrimaryText>
						<MarginB>
							<ItemAlignments justifyContent='space-between' alignItems='start'>
								<CodeWrapper>
									<PrimaryText size='sm' height='lg'>
										{payment}
									</PrimaryText>
									<PrimaryText size='sm' height='lg'>
										{date}
									</PrimaryText>
									<PrimaryText size='sm' height='lg'>
										{name}
									</PrimaryText>
								</CodeWrapper>
								<CodeWrapper>
									<TextCenter>
										<PrimaryText size='xs' weight='bolder' align='center'>
											{smalltext}
										</PrimaryText>
										<PrimaryText
											size='xxs'
											weight='bolder'
											align='center'
											color='warning'
										>
											{coloredtext}
										</PrimaryText>
									</TextCenter>
								</CodeWrapper>
							</ItemAlignments>
						</MarginB>
						<Width width='78%' space='auto'>
							<BottomButton
								title='PENDING PAYMENT'
								lineHeight='1.25rem'
								weight='700'
								bgColor='var(--btn-primary)'
							/>
						</Width>
					</Padding>
				</CodeWrapper>
			</OverFlowScroll>
		</MarginT>
	)
}
export default PropertiesCard
