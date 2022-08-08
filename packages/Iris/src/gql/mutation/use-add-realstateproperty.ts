import { gql, useMutation } from "@apollo/client"
import {
	AddRealEstateProperties,
	AddRealEstatePropertiesVariables,
} from "./__generated__/AddRealEstateProperties"

const ADD_REAL_ESTATE_PROPERTY = gql`
	mutation AddRealEstateProperties($inputs: [RealEstatePropertyAddInput]) {
		AddRealEstateProperties(inputs: $inputs) {
			id
			name
			address {
				id
				provinceState
				postalCode
			}
			ownerships {
				id
			}
			households {
				id
			}
		}
	}
`

export const useAddRealEstateProperty = () => {
	return useMutation<AddRealEstateProperties, AddRealEstatePropertiesVariables>(
		ADD_REAL_ESTATE_PROPERTY
	)
}
