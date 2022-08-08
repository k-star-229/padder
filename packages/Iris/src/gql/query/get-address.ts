import {
	QueryResult,
	QueryTuple,
	gql,
	useLazyQuery,
	useQuery,
} from "@apollo/client"

import { Addresses, AddressesVariables } from "./__generated__/Addresses"

const GET_ADDRESS = gql`
	query Addresses($addressesId: ID) {
		Addresses(id: $addressesId) {
			id
			country
			postalCode
			streetAddress
			provinceState
			city
		}
	}
`

export const useGetAddress = (
	addressId?: string
): QueryResult<Addresses, AddressesVariables> => {
	return useQuery<Addresses, AddressesVariables>(GET_ADDRESS, {
		variables: {
			addressesId: addressId,
		},
	})
}

export const useLazyGetAddress = (): QueryTuple<
	Addresses,
	AddressesVariables
> => {
	return useLazyQuery<Addresses, AddressesVariables>(GET_ADDRESS)
}
