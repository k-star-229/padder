import { BgColor, MarginT, Padding, Width } from "../../../styles/global"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import PrimaryText from "../../atoms/text-component"

export const InviteCard: React.FC<{ title?: string; des?: string }> = ({
	title,
	des,
}) => {
	return (
		<BgColor className='bg-[url(/svg/invite-banner.svg)] bg-no-repeat bg-cover bg-center'>
			<Padding padding='1rem'>
				<Width style={{ marginLeft: "auto" }} width='72%'>
					<PrimaryText size='sm' height='md' weight='bolder' align='center'>
						{title}
					</PrimaryText>
					<PrimaryText size='sm' height='md' weight='normal' align='center'>
						{des}
					</PrimaryText>
					<MarginT space='0.75rem'>
						<BottomButton
							title={"All Done"}
							bgColor='#0064AD'
							borderRadius='0'
							padding='6px 0'
						/>
					</MarginT>
				</Width>
			</Padding>
		</BgColor>
	)
}
