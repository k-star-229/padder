import { useRouter } from "next/router"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { Layout, MarginB, Padding, TextCenter } from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"
import NavigationTabs from "../../molecules/bottom-navs"
import BadgeTabs from "../../molecules/colored-badge"
import { EmailCard } from "../../molecules/email-info-box"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import { HeadingWithIcon } from "../../molecules/heading-with-icon"
import HouseLeaseCard from "../../molecules/house-lease-box"
import { LicenseCard } from "../../molecules/license-card"
import MyTenantUsers from "../../molecules/my-tenants"
import { PhoneInfoCard } from "../../molecules/phone-info-card"
import VerificationCard from "../../molecules/verification-box"

const LandlordMainV2Template: React.FC = () => {
	const { push } = useRouter()
	const handleAddProperty = (): void => {
		push(createRoute(PlainRoutes.landlordAddProperty))
	}
	return (
		<Layout>
			<TopHeaderBar />
			<Padding padding='4rem 2rem'>
				<HeadingWithIcon onClick={handleAddProperty} title={"My Properties"} />
				<BadgeTabs title={"123 Wellington Avenue Toronto, ON "} />
				<HeadingWithIcon title={"My Tenants"} />
				<MyTenantUsers name='Jaymes Avery' name2='Maria Avery' />
				<VerificationCard title='verified' title2='verified' />
				<Padding padding='0 1.25rem'>
					<EmailCard email='jjavery82@gmail.com' />
					<PhoneInfoCard phone='905 338 5555' />
				</Padding>
				<LicenseCard />
				<MarginB space='.75rem'>
					<TextCenter>
						<PageHeadings title={"Lease Signed:  April 04, 2021"} />
					</TextCenter>
				</MarginB>
				<HouseLeaseCard title='View Signed Lease' />
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}
export default LandlordMainV2Template
