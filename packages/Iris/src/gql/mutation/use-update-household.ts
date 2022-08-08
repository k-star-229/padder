import { ApolloCache, DefaultContext, gql, MutationTuple, useMutation } from "@apollo/client"

import {
	UpdateHouseholds,
	UpdateHouseholdsVariables,
} from "./__generated__/UpdateHouseholds"

const UPDATE_HOUSEHOLD = gql`
	mutation UpdateHouseholds($inputs: [HouseholdUpdateInput]) {
		UpdateHouseholds(inputs: $inputs) {
			id
			phoneNumber
		}
	}
`

export const useUpdateHousehold = (): MutationTuple<
	UpdateHouseholds,
	UpdateHouseholdsVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	return useMutation<UpdateHouseholds, UpdateHouseholdsVariables>(
		UPDATE_HOUSEHOLD
	)
}
