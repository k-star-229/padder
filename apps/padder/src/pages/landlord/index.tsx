import { NextPage } from "next"

import LandlordMainTemplate from "../../components/template/landlord-main"
import { withAuthTabs } from "../../hoc/with-auth-tabs"

const PadderLandlord: NextPage = () => <LandlordMainTemplate />

export default withAuthTabs({
	Component: PadderLandlord,
	isProtected: false,
})
