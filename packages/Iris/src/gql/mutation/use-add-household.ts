import { ApolloCache, DefaultContext, gql, MutationTuple, useMutation } from "@apollo/client"

import {
	AddHouseholds,
	AddHouseholdsVariables,
} from "./__generated__/AddHouseholds"

export const useAddHousehold = (): MutationTuple<
	AddHouseholds,
	AddHouseholdsVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	const ADD_HOUSEHOLD = gql`
		mutation AddHouseholds($inputs: [HouseholdAddInput]) {
			AddHouseholds(inputs: $inputs) {
				id
				phoneNumber
			}
		}
	`
	return useMutation<AddHouseholds, AddHouseholdsVariables>(ADD_HOUSEHOLD)
}
