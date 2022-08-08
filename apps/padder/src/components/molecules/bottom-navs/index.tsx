import Image from "next/image"
import { useRouter } from "next/router"
import { FaUser } from "react-icons/fa"
import { RiHistoryFill } from "react-icons/ri"

import {
	HOCBottomWrapper,
	ItemAlignments,
	MarginT,
	Padding,
	StyledIcon,
} from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

const NavigationTabs: React.FC = () => {
	const { push } = useRouter()

	const handleHomeNavigation = (): void => {
		push("/")
	}

	return (
		<HOCBottomWrapper className='block md:hidden'>
			<Padding padding='.75rem 0 .5rem'>
				<ItemAlignments justifyContent='space-around'>
					<ItemAlignments
						direction='column'
						onClick={(): Promise<boolean> => push("/history")}
					>
						<StyledIcon icon={<RiHistoryFill />} color='var(--gray-300)' />
						<MarginT space='.25rem'>
							<PrimaryText size='xs' height='sm'>
								History
							</PrimaryText>
						</MarginT>
					</ItemAlignments>

					<Image
						onClick={handleHomeNavigation}
						src={"/svg/nav-icon.svg"}
						alt='alt-text'
						width={"50"}
						height={"32"}
					/>
					<ItemAlignments
						direction='column'
						onClick={(): Promise<boolean> => push("/profile")}
					>
						<StyledIcon icon={<FaUser />} color='var(--gray-300)' />
						<MarginT space='.25rem'>
							<PrimaryText size='xs' height='sm'>
								Profile
							</PrimaryText>
						</MarginT>
					</ItemAlignments>
				</ItemAlignments>
			</Padding>
		</HOCBottomWrapper>
	)
}

export default NavigationTabs
