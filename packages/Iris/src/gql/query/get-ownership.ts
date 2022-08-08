import { gql, useLazyQuery } from "@apollo/client"

import { Ownership, OwnershipVariables } from "./__generated__/Ownership"

const GET_OWNERSHIP = gql`
	query Ownership(
		$ownershipId: ID
		$endDate: Date
		$landlordId: Int
		$startDate: Date
		$realEstatePropertyId: Int
	) {
		Ownership(
			id: $ownershipId
			endDate: $endDate
			landlordId: $landlordId
			startDate: $startDate
			realEstatePropertyId: $realEstatePropertyId
		) {
			id
			startDate
			endDate
			realEstateProperty {
				id
				name
				address {
					id
					country
					city
					provinceState
					postalCode
					streetAddress
				}
			}
		}
	}
`

export const useGetOwnership = () => {
	return useLazyQuery<Ownership, OwnershipVariables>(GET_OWNERSHIP)
}
