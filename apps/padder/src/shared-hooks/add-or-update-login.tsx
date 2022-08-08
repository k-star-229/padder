import { PadderLoginUpdateInput } from "iris/lib/__generated__/globalTypes"
import { GetLogins } from "iris/lib/gql/mutation/__generated__/GetLogins"
import { useAddLogin, useGetLogin } from "iris/lib/gql/mutation/use-add-login"
import { useUpdateLogin } from "iris/lib/gql/mutation/use-update-login"
import { typesafeParseInt } from "iris/lib/gql/utils"
import LoginMutationHelper from "iris/lib/query-utils/login"

import { isServer } from "../lib/isServer"

type AddInputType = {
	email: string
	landlordId?: number
	tenantId?: number
}

type UpdateFunctionOptions = {
	postAction?: (logins: GetLogins) => void
}

export const useAddOrUpdateLogin = (): ((
	res: AddInputType,
	options?: UpdateFunctionOptions
) => Promise<void>) => {
	const [getLogin] = useGetLogin()
	const [mutateLogin] = useAddLogin()
	const [updateLogin] = useUpdateLogin()

	const updateLoginCred = async (
		res: AddInputType,
		options?: UpdateFunctionOptions
	): Promise<void> => {
		const platform = !isServer ? localStorage.getItem("PLATFORM") : ""
		const androidToken =
			platform === "android" ? localStorage.getItem("FCM_TOKEN") : ""
		const iosToken = platform === "ios" ? localStorage.getItem("FCM_TOKEN") : ""
		const { data: logins } = await getLogin({
			variables: { email: res?.email },
		})
		if (
			logins.PadderLogins.length === 0 ||
			(logins.PadderLogins.length > 0 && logins.PadderLogins[0].email !== res.email)
		) {
			const addLoginData = LoginMutationHelper({
				email: res?.email,
				androidToken,
				iosToken,
				landlordId: res.landlordId,
				tenantId: res.tenantId
			})
			await mutateLogin({
				variables: {
					inputs: [addLoginData],
				},
			})
		} else if (
			logins.PadderLogins.length > 0 &&
			logins.PadderLogins[0].email === res.email
		) {
			const currentLogin = logins.PadderLogins[0]
			const updateLoginData = LoginMutationHelper({
				id: typesafeParseInt(currentLogin.id),
				androidToken,
				iosToken,
				email: currentLogin.email,
				landlordId: res.landlordId,
				tenantId: res.tenantId
			})
			await updateLogin({
				variables: {
					inputs: [updateLoginData as PadderLoginUpdateInput],
				},
			})
			if (options?.postAction) {
				options?.postAction(logins)
			}
		}
	}
	return updateLoginCred
}
