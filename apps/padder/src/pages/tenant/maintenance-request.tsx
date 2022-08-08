import { NextPage } from "next"

import { MaintenanceRequestTemplate } from "../../components/template/maintenance-request"
import { withAuthTabs } from "../../hoc/with-auth-tabs"

const MaintenanceRequest: NextPage = () => <MaintenanceRequestTemplate />

export default withAuthTabs({
	Component: MaintenanceRequest,
	isProtected: true,
})
