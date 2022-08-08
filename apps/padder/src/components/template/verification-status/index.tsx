import { useState } from "react"
import { HOCWrapper, Layout, Padding, Seperator } from "../../../styles/global"
import NavigationTabs from "../../molecules/bottom-navs"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import PendingVerificaionBox from "../../molecules/pending-verification-box"

const VerificationStatusTemplate: React.FC = () => {
	const [approved, setApproved] = useState(false)
	return (
		<Layout>
			<TopHeaderBar />
			<Padding padding='0 1.75rem'>
				<HOCWrapper>
					<PendingVerificaionBox
						src={approved ? "/svg/verified-icon.svg" : "/svg/pending-icon.svg"}
						title='Pending Verification'
						color={approved ? "var(--btn-primary)" : "#d9d9d9"}
					/>
					<Seperator bgColor='#d9d9d9' height='2px' space='2.5rem 0' />
					<PendingVerificaionBox
						src={"/svg/approval-icon.svg"}
						title='Pending Approval'
						color='#d9d9d9'
					/>
				</HOCWrapper>
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}
export default VerificationStatusTemplate
