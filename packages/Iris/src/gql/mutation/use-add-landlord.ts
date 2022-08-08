import {
	gql,
	MutationTuple,
	useMutation,
} from "@apollo/client"

import {
	AddLandlords,
	AddLandlordsVariables,
} from "./__generated__/AddLandlords"

const ADD_LANDLORD = gql`
	mutation AddLandlords($inputs: [LandlordAddInput]) {
		AddLandlords(inputs: $inputs) {
			firstName
			id
			lastName
			phoneNumber
			email
		}
	}
`

export const useAddLandlord = (): MutationTuple<
	AddLandlords,
	AddLandlordsVariables
> => {
	return useMutation<AddLandlords, AddLandlordsVariables>(ADD_LANDLORD)
}
