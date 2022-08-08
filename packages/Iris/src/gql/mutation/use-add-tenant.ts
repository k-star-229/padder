import {
	ApolloCache,
	DefaultContext,
	gql,
	MutationTuple,
	useMutation,
} from "@apollo/client"

import { AddTenants, AddTenantsVariables } from "./__generated__/AddTenants"

const ADD_TENANT = gql`
	mutation AddTenants($inputs: [TenantAddInput]) {
		AddTenants(inputs: $inputs) {
			id
			firstName
			verified
			lastName
			email
		}
	}
`

export const useAddTenant = (): MutationTuple<
	AddTenants,
	AddTenantsVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	return useMutation<AddTenants, AddTenantsVariables>(ADD_TENANT)
}
