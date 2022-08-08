import { gql, useMutation } from "@apollo/client"
import {
	AddOwnership,
	AddOwnershipVariables,
} from "./__generated__/AddOwnership"

const ADD_OWNERSHIP = gql`
	mutation AddOwnership($inputs: [OwnershipAddInput]) {
		AddOwnership(inputs: $inputs) {
			id
			startDate
			endDate
			landlord {
				id
				firstName
				lastName
				email
			}
			realEstateProperty {
				id
				name
			}
		}
	}
`

export const useAddOwnership = () => {
	return useMutation<AddOwnership, AddOwnershipVariables>(ADD_OWNERSHIP)
}
