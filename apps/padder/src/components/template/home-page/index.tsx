import { useGetMaintenanceRequest } from "iris/lib/gql/query/get-maintenance-request"
import { Spinner } from "kl-core"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { typesafeParseInt } from "../../../lib/utils"
import { useLogin } from "../../../shared-hooks/use-login"
import {
	Boldtext,
	CodeWrapper,
	Layout,
	MarginB,
	MarginY,
	OverFlowScroll,
	Padding,
} from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"
import PrimaryText from "../../atoms/text-component"
import { ActivityBox } from "../../molecules/activity-card"
import NavigationTabs from "../../molecules/bottom-navs"
import { DesktopHeader } from "../../molecules/desktop-header"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import { HeadingWithIcon } from "../../molecules/heading-with-icon"
import { InviteCard } from "../../molecules/invite-card"
import { MaintenanceCard } from "../../molecules/maintance-box"
import { MaintenanceRequestCard } from "../../molecules/maintance-request-box"
import ScheduleCard from "../../molecules/padder-schedule-box"

const HomePageTemlate: React.FC = () => {
	const { push } = useRouter()
	const [
		getMaintenanceRequest,
		{ data: maintenanceRequests, loading: maintenanceLoading },
	] = useGetMaintenanceRequest()
	const { data, loading } = useLogin()

	useEffect(() => {
		if (data?.Logins.length > 0) {
			getMaintenanceRequest({
				variables: {
					tenantId: typesafeParseInt(data?.Logins[0].tenant?.id),
				},
			})
		}
	}, [data])

	const handleAddMaintenanceRequest = (): void => {
		push(createRoute(PlainRoutes.addMaintenanceRequest))
	}

	if (loading || maintenanceLoading) {
		return <Spinner />
	}

	const requests = maintenanceRequests?.MaintenanceRequests

	return (
		<Layout className='container mx-auto'>
			<TopHeaderBar />
			<DesktopHeader />
			<Padding padding='4rem 2rem '>
				<Padding padding='1.75rem 0' className='block md:hidden'>
					<PageHeadings title={"My Padder Schedule"} />
				</Padding>
				<ScheduleCard
					amount={
						<>
							<Boldtext>Rent Amount </Boldtext> $1800
						</>
					}
					payment={
						<>
							<Boldtext>Next Payment </Boldtext> April, 2022
						</>
					}
					srcpath='/svg/colored-arrow.svg'
					smalltext='Upcoming Renewal'
					textdes='Increasing of 1.2%'
				/>
				<HeadingWithIcon
					onClick={handleAddMaintenanceRequest}
					title={"Maintenance Request"}
				/>
				<MarginB space='.75rem'>
					<OverFlowScroll className='no-scrollbar'>
						{requests?.length > 0 ? (
							requests.map((r, idx) => (
								<MaintenanceCard
									key={idx}
									title={r.location}
									des={r.description}
									state={r.maintenanceRequestState}
								/>
							))
						) : (
							<MaintenanceRequestCard
								title={"You have no maintenance requests"}
							/>
						)}
					</OverFlowScroll>
				</MarginB>
				<CodeWrapper className='block md:flex flex-row-reverse gap-16'>
					<CodeWrapper className='w-full md:w-2/5'>
						<InviteCard
							title='Invite a friend'
							des='Receive $20 each towards 3 months of rent!'
						/>
					</CodeWrapper>
					<CodeWrapper className='w-full md:w-3/5'>
						<MarginY space='.75rem'>
							<PageHeadings title={"Latest Activities"} />
						</MarginY>
						<PrimaryText size='xs' color='seconadry'>
							March 20rd, 2022
						</PrimaryText>
						<ActivityBox
							srcpath={"/svg/balance-paid.svg"}
							title={"Balanced Paid"}
							des={"12:01 AM - Transfer Completed"}
							price={"$1800"}
						/>
					</CodeWrapper>
				</CodeWrapper>
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}
export default HomePageTemlate
