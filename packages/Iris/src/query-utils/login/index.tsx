import {
	PadderLoginAddInput,
	PadderLoginUpdateInput,
} from "../../../__generated__/globalTypes"
import { GetLogins_PadderLogins } from "../../gql/mutation/__generated__/GetLogins"

function LoginMutationHelper({
	email,
	iosToken,
	androidToken,
	id,
	oldLogin,
	tenantId,
	landlordId,
}: {
	email: string
	iosToken: string
	androidToken: string
	id?: number
	oldLogin?: GetLogins_PadderLogins
	tenantId?: number
	landlordId?: number
}): PadderLoginAddInput | PadderLoginUpdateInput {
	const updateLogin: PadderLoginAddInput | PadderLoginUpdateInput = {
		email: email,
		// TODO: Token needs to be added as string only
		iosDeviceToken: [],
		androidDeviceToken: [],
		...(id ? { id } : undefined),
		tenantId,
		landlordId,
	}
	return updateLogin
}

export default LoginMutationHelper
