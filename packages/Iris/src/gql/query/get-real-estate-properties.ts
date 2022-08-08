import { gql, useLazyQuery } from "@apollo/client"

import {
	RealEstateProperties,
	RealEstatePropertiesVariables,
} from "./__generated__/RealEstateProperties"

const GET_REAL_ESTATE_PROPERTIES = gql`
	query RealEstateProperties(
		$realEstatePropertiesId: ID
		$name: String
		$addressId: Int
	) {
		RealEstateProperties(
			id: $realEstatePropertiesId
			name: $name
			addressId: $addressId
		) {
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
			ownerships {
				id
				startDate
				endDate
			}
			households {
				id
				phoneNumber
			}
		}
	}
`

export const useGetRealEstateProperties = () => {
	return useLazyQuery<RealEstateProperties, RealEstatePropertiesVariables>(
		GET_REAL_ESTATE_PROPERTIES
	)
}
