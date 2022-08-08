import { FetchResult } from "@apollo/client"
import { TenantAddInput } from "iris/lib/__generated__/globalTypes"
import { AddLandlords } from "iris/lib/gql/mutation/__generated__/AddLandlords"
import { AddTenants } from "iris/lib/gql/mutation/__generated__/AddTenants"
import { useAddLandlord } from "iris/lib/gql/mutation/use-add-landlord"
import { useAddTenant } from "iris/lib/gql/mutation/use-add-tenant"
import { typesafeParseInt } from "iris/lib/gql/utils"

import { useToastStore } from "../state-machine/use-toast-store"
import { UserType } from "../static/enums/common"
import { useAddOrUpdateLogin } from "./add-or-update-login"

export const useAddUpdateTenant = (): {
	addTenantHandler: (
		{ firstName, lastName, email, phoneNumber }: TenantAddInput,
		options?: {
			loginType?: UserType
		}
	) => Promise<void>
} => {
	const [addTenant, { error: addTenantError }] = useAddTenant()
	const updateLoginCred = useAddOrUpdateLogin()
	const { showToast } = useToastStore()
	const [addLandlord, { error: addLandlordTenant }] = useAddLandlord()

	const addTenantHandler = async (
		addInput: TenantAddInput,
		options?: {
			loginType?: UserType
		}
	): Promise<void> => {
		try {
			let tenants: FetchResult<
				AddTenants,
				Record<string, any>,
				Record<string, any>
			>
			let landlords: FetchResult<
				AddLandlords,
				Record<string, any>,
				Record<string, any>
			>
			if (options?.loginType === UserType.renter) {
				tenants = await addTenant({
					variables: {
						inputs: [addInput],
					},
				})
			} else if (options?.loginType === UserType.landlord) {
				const { email, firstName, lastName, phoneNumber } = addInput
				landlords = await addLandlord({
					variables: {
						inputs: [
							{
								email,
								firstName,
								lastName,
								phoneNumber,
							},
						],
					},
				})
			}
			if (addTenantError || addLandlordTenant) {
				showToast({
					show: true,
					title: "Sign up failed",
					description: addTenantError.message || addLandlordTenant.message,
					type: "error",
				})
			}
			if (tenants?.data?.AddTenants.length > 0) {
				const tenant = tenants?.data?.AddTenants[0]
				await updateLoginCred({
					email: tenant?.email,
					tenantId: typesafeParseInt(tenant.id),
				})
			} else if (landlords?.data?.AddLandlords.length > 0) {
				const landlord = landlords?.data?.AddLandlords[0]
				await updateLoginCred({
					email: landlord?.email,
					landlordId: typesafeParseInt(landlord.id),
				})
			}
		} catch (error) {
			throw error
		}
	}

	return {
		addTenantHandler,
	}
}
