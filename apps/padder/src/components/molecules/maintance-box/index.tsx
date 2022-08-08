import { MdHistory } from "react-icons/md"

import {
	CodeWrapper,
	ItemAlignments,
	Padding,
	StyledIcon,
} from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface MaintenanceCardProps {
	title: string
	des: string
	state: {
		id: number | string
		name: string
	}
}

export const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
	title,
	des,
	state,
}) => {
	return (
		<CodeWrapper className='rounded-xl w-40 min-w-[160px] shadow-1'>
			<Padding padding='.25rem .5rem'>
				<ItemAlignments justifyContent='space-around'>
					<PrimaryText size='xs' weight='bolder'>
						{title}
					</PrimaryText>
					<StyledIcon icon={<MdHistory />} fontSize='14px' color='#A24EDE' />
				</ItemAlignments>
				<PrimaryText size='xs'>{des.substring(0, 40)}...</PrimaryText>
			</Padding>
			<CodeWrapper className='bg-[#a24ede] rounded-br-xl rounded-bl-xl py-0.5'>
				<PrimaryText
					size='xxs'
					height='xs'
					transform='large'
					align='center'
					color='light'
				>
					{state.name}
				</PrimaryText>
			</CodeWrapper>
		</CodeWrapper>
	)
}
