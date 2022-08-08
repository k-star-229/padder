import { useGetOwnership } from "iris/lib/gql/query/get-ownership"
import { typesafeParseInt } from "iris/lib/gql/utils"
import { Spinner } from "kl-core"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { useLogin } from "../../../shared-hooks/use-login"
import { useActiveStore } from "../../../state-machine/use-active-store"
import { useModalStore } from "../../../state-machine/use-modal-store"
import {
	Boldtext,
	Layout,
	MarginB,
	OverFlowScroll,
	Padding,
} from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"
import PrimaryText from "../../atoms/text-component"
import { ActivityBox } from "../../molecules/activity-card"
import NavigationTabs from "../../molecules/bottom-navs"
import BadgeTabs from "../../molecules/colored-badge"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import { HeadingWithIcon } from "../../molecules/heading-with-icon"
import SmallBadges from "../../molecules/lease-badges"
import { MaintenanceRequestCard } from "../../molecules/maintance-request-box"
import MyTenantUsers from "../../molecules/my-tenants"
import PropertiesCard from "../../molecules/properties-box"
import { AddTenant } from "../../organisms/modals/add-tenant"

const LandlordMainTemplate: React.FC = () => {
	const { push } = useRouter()
	const { showModal } = useModalStore()

	const [getOwnership, { data: ownership, loading: ownershipLoading }] =
		useGetOwnership()
	const { data, loading } = useLogin()
	const { setActive, active } = useActiveStore()

	const handleChangeActiveProperty = (id: string): void => {
		setActive(id, "property")
	}

	useEffect(() => {
		if (data && data?.Logins?.length > 0) return
		getOwnership({
			variables: {
				landlordId: typesafeParseInt(data?.Logins[0].id),
			},
		}).then(o => {
			if (o.data?.Ownership.length > 0) {
				setActive(o.data?.Ownership[0].id, "property")
			}
		})
	}, [data])

	const handleAddTenant = (): void => {
		showModal({
			title: "Add Clinic",
			show: true,
			children: <AddTenant />,
		})
	}

	if (loading || ownershipLoading) {
		return <Spinner />
	}

	const properties = ownership?.Ownership

	const handleAddProperty = (): void => {
		push(createRoute(PlainRoutes.landlordAddProperty))
	}

	return (
		<Layout>
			<TopHeaderBar />
			<Padding padding='4rem 2rem'>
				<HeadingWithIcon onClick={handleAddProperty} title={"My Properties"} />
				<OverFlowScroll className='no-scrollbar mx-0'>
					{properties && properties.length > 0 ? (
						properties.map((p, idx) => {
							if (p?.realEstateProperty?.address) {
								const address = p?.realEstateProperty?.address
								return (
									<BadgeTabs
										onClick={(): void => handleChangeActiveProperty(p.id)}
										key={idx}
										active={active.property === p.id}
										title={`${address?.streetAddress},
							${address?.city},
							${address?.provinceState},
							${address?.country}`}
									/>
								)
							}
						})
					) : (
						<BadgeTabs title={`Please add Property to continue`} />
					)}
				</OverFlowScroll>
				<PropertiesCard
					title={"April"}
					payment={
						<>
							<Boldtext>Payment: </Boldtext> $1800
						</>
					}
					date={
						<>
							<Boldtext>Date: </Boldtext> April 20, 2022
						</>
					}
					name={
						<>
							<Boldtext>From: </Boldtext> J. Avery
						</>
					}
					smalltext={"Reminders"}
					coloredtext={"Upcoming Annual Renewal"}
				/>
				<HeadingWithIcon onClick={handleAddTenant} title={"My Tenants"} />
				<MyTenantUsers name='Jaymes Avery' name2='Maria Avery' />
				<PageHeadings title={"Lease Renewal - May 01, 2022"} />
				<SmallBadges
					title1={"Increase 0%"}
					title2={"Increase 0.5%"}
					title3={"Increase 1.2%"}
				/>
				<PageHeadings title={"Maintenance Request"} />
				<MaintenanceRequestCard title={"No new maintenance requests"} />
				<MarginB space='.75rem'>
					<PageHeadings title={"Latest Activities"} />
				</MarginB>
				<PrimaryText size='xs' color='seconadry'>
					March 20rd, 2022
				</PrimaryText>
				<ActivityBox
					srcpath={"/svg/balance-paid.svg"}
					title={"Rent paid - Jaymes Avery"}
					des={"12:01 AM - Transfer Completed"}
					price={"$1800"}
				/>
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}
export default LandlordMainTemplate
