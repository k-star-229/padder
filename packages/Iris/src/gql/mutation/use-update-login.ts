import {
	ApolloCache,
	DefaultContext,
	MutationTuple,
	gql,
	useMutation,
} from "@apollo/client"

import {
	UpdateLogins,
	UpdateLoginsVariables,
} from "./__generated__/UpdateLogins"

export const useUpdateLogin = (): MutationTuple<
	UpdateLogins,
	UpdateLoginsVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	const UPDATE_LOGIN = gql`
		mutation UpdateLogins($inputs: [PadderLoginUpdateInput]) {
			UpdatePadderLogins(inputs: $inputs) {
				id
				email
			}
		}
	`
	return useMutation<UpdateLogins, UpdateLoginsVariables>(UPDATE_LOGIN)
}
