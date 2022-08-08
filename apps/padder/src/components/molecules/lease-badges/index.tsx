import {
	BgColor,
	ItemAlignments,
	MarginY,
	Padding,
} from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface SmallBadgesProps {
	title1?: string
	title2?: string
	title3?: string
}

const SmallBadges: React.FC<SmallBadgesProps> = ({
	title1,
	title2,
	title3,
}) => {
	return (
		<MarginY space='1.5rem'>
			<ItemAlignments columnGap='.5rem'>
				<BgColor color='var(--orange-500)' borderRadius='.625rem'>
					<Padding padding='.25rem .625rem'>
						<PrimaryText align='center' color='light' height='md' weight='bold'>
							{title1}
						</PrimaryText>
					</Padding>
				</BgColor>
				<BgColor color='var(--orange-500)' borderRadius='.625rem'>
					<Padding padding='.25rem .625rem'>
						<PrimaryText align='center' color='light' height='md' weight='bold'>
							{title2}
						</PrimaryText>
					</Padding>
				</BgColor>
				<BgColor color='var(--orange-500)' borderRadius='.625rem'>
					<Padding padding='.25rem .625rem'>
						<PrimaryText align='center' color='light' height='md' weight='bold'>
							{title3}
						</PrimaryText>
					</Padding>
				</BgColor>
			</ItemAlignments>
		</MarginY>
	)
}
export default SmallBadges
