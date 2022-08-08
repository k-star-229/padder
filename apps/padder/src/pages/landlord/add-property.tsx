import { NextPage } from "next"

import { AddPropertyTemplate } from "../../components/template/add-property"
import { withAuthTabs } from "../../hoc/with-auth-tabs"

const AddProperty: NextPage = () => {
	return <AddPropertyTemplate />
}

export default withAuthTabs({
	Component: AddProperty,
	isProtected: true,
})
