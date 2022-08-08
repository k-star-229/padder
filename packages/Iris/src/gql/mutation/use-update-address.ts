import {
	ApolloCache,
	DefaultContext,
	MutationTuple,
	gql,
	useMutation,
} from "@apollo/client"

import {
	UpdateAddresses,
	UpdateAddressesVariables,
} from "./__generated__/UpdateAddresses"

export const useUpdateAddress = (): MutationTuple<
	UpdateAddresses,
	UpdateAddressesVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	const UPDATE_ADDRESS = gql`
		mutation UpdateAddresses($inputs: [AddressUpdateInput]) {
			UpdateAddresses(inputs: $inputs) {
				id
				postalCode
				streetAddress
				provinceState
				country
				city
			}
		}
	`

	return useMutation<UpdateAddresses, UpdateAddressesVariables>(UPDATE_ADDRESS)
}
