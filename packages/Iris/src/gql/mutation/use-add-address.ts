import {
	ApolloCache,
	DefaultContext,
	MutationTuple,
	gql,
	useMutation,
} from "@apollo/client"

import {
	AddAddresses,
	AddAddressesVariables,
} from "./__generated__/AddAddresses"

export const useAddAddress = (): MutationTuple<
	AddAddresses,
	AddAddressesVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	const ADD_ADDRESS = gql`
		mutation AddAddresses($inputs: [AddressAddInput]) {
			AddAddresses(inputs: $inputs) {
				id
			}
		}
	`
	return useMutation<AddAddresses, AddAddressesVariables>(ADD_ADDRESS)
}
