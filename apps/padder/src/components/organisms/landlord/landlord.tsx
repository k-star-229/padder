import styled from "styled-components"

import { TopHeaderBar } from "../../../components/molecules/header-top-bar"
import { HeadingWithIcon } from "../../../components/molecules/heading-with-icon"
import { OverFlowScroll, Padding } from "../../../styles/global"
import Label from "../../atoms/label"

const LandlordMain: React.FC = () => {
	return (
		<>
			<TopHeaderBar />
			<Padding padding='0 2rem'>
				<HeadingWithIcon />
				<OverFlowScroll className='no-scrollbar'>
					<ColoredBadge>
						<Padding padding='.25rem .75rem'>
							<Label
								title={"123 Wellington Avenue"}
								color='#fff'
								fontSize='14px'
								lineHeight='20px'
								weight='500'
							/>
							<Label
								title={"Toronto, ON"}
								color='#fff'
								fontSize='14px'
								lineHeight='20px'
								weight='500'
							/>
						</Padding>
					</ColoredBadge>
				</OverFlowScroll>
			</Padding>
		</>
	)
}
export default LandlordMain

const ColoredBadge = styled.div`
	background: var(--purple-100);
	border-radius: 0.625rem;
	width: 12rem;
	min-width: 12rem;
`
