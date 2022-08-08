import { PageHeadings } from "../../../components/atoms/page-heading"
import { ActivityBox } from "../../../components/molecules/activity-card"
import NavigationTabs from "../../../components/molecules/bottom-navs"
import { TopHeaderBar } from "../../../components/molecules/header-top-bar"
import { HeadingWithIcon } from "../../../components/molecules/heading-with-icon"
import { InviteCard } from "../../../components/molecules/invite-card"
import { MaintenanceCard } from "../../../components/molecules/maintance-box"
import ScheduleCard from "../../../components/molecules/padder-schedule-box"
import { Layout, MarginB, Padding } from "../../../styles/global"
import Label from "../../atoms/label"

const Renter: React.FC = () => {
	return (
		<>
			<Layout>
				<TopHeaderBar />
				<Padding padding='1.75rem 2rem'>
					<PageHeadings title={"My Padder Schedule"} />
				</Padding>
				<ScheduleCard />
				<Padding padding='0 2rem'>
					<InviteCard />
					<HeadingWithIcon />
					<MaintenanceCard />
					<MarginB space='.75rem'>
						<PageHeadings title={"Latest Activities"} />
					</MarginB>
					<Label
						title={"March 20rd, 2022"}
						fontSize='0.75rem'
						color='var(--gray-150)'
					/>
					<ActivityBox />
				</Padding>
				<NavigationTabs />
			</Layout>
		</>
	)
}
export default Renter
