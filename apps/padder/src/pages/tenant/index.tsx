import { NextPage } from "next"

import HomePageTemlate from "../../components/template/home-page"
import { withAuthTabs } from "../../hoc/with-auth-tabs"

const PadderSchedule: NextPage = () => <HomePageTemlate />

export default withAuthTabs({
	Component: PadderSchedule,
	isProtected: false,
})
