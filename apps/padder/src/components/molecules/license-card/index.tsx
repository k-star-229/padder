import { BgColor, ItemAlignments, Padding } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

export const LicenseCard: React.FC = () => {
	return (
		<Padding padding='1.75rem 0'>
			<BgColor color='#D9D9D9' borderRadius='10px'>
				<ItemAlignments height='180px'>
					<PrimaryText
						size='lg'
						height='lg'
						color='light'
						align='center'
						weight='lighter'
					>
						Waiting for driver license
					</PrimaryText>
				</ItemAlignments>
			</BgColor>
		</Padding>
	)
}
