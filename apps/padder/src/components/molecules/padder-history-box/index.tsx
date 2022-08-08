import Image from "next/image"

import {
	CodeWrapper,
	ItemAlignments,
	MarginB,
	Padding,
} from "../../../styles/global"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import PrimaryText from "../../atoms/text-component"

interface PadderHistoryCardProps {
	title?: JSX.Element
	des?: string
	srcpath?: string
	bgColor?: string
}

const PadderHistoryCard: React.FC<PadderHistoryCardProps> = ({
	title,
	des,
	srcpath,
	bgColor,
}) => {
	return (
		<CodeWrapper className='rounded-xl bg-white shadow-1 '>
			<MarginB space='1.25rem'>
				<Padding padding='1.25rem 2.25rem'>
					<MarginB space='10px'>
						<ItemAlignments columnGap='1rem'>
							<Image src={srcpath} alt='alt-text' width={"36"} height={"36"} />
							<CodeWrapper>
								<PrimaryText size='sm' height='md'>
									{title}
								</PrimaryText>
								<Padding padding='0 1rem 0 0'>
									<PrimaryText size='sm' height='md' transform='large'>
										{des}
									</PrimaryText>
								</Padding>
							</CodeWrapper>
						</ItemAlignments>
					</MarginB>
					<BottomButton
						lineHeight='1.25rem'
						title={"PAID:20 Feb"}
						bgColor={bgColor}
					></BottomButton>
				</Padding>
			</MarginB>
		</CodeWrapper>
	)
}
export default PadderHistoryCard
