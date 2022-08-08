import { TopHeaderBar } from "../../../components/molecules/header-top-bar"
import { Layout, Padding } from "../../../styles/global"
import NavigationTabs from "../../molecules/bottom-navs"
import { ProfileHeading } from "../../molecules/profile-heading"

const PendingVerificationTemplate: React.FC = () => {
	return (
		<Layout>
			<TopHeaderBar />
			<Padding padding='4rem 2rem'>
				<Padding padding='1.5rem 0 0'>
					<ProfileHeading title='Welcome Back!' />
				</Padding>
				<ProfileHeading color='gray' title='Uplaod your documents'>
					Provide your profile picture and display name to join the community
				</ProfileHeading>
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}
export default PendingVerificationTemplate
