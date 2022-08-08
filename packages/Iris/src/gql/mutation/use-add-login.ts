import {
	ApolloCache,
	DefaultContext,
	MutationTuple,
	QueryTuple,
	gql,
	useLazyQuery,
	useMutation,
} from "@apollo/client"

import { AddLogins, AddLoginsVariables } from "./__generated__/AddLogins"
import { GetLogins, GetLoginsVariables } from "./__generated__/GetLogins"

export const useAddLogin = (): MutationTuple<
	AddLogins,
	AddLoginsVariables,
	DefaultContext,
	ApolloCache<any>
> => {
	const LOGIN = gql`
		mutation AddLogins($inputs: [PadderLoginAddInput]) {
			AddPadderLogins(inputs: $inputs) {
				id
			}
		}
	`
	return useMutation<AddLogins, AddLoginsVariables>(LOGIN)
}

export const useGetLogin = (): QueryTuple<GetLogins, GetLoginsVariables> => {
	const GET_LOGIN = gql`
		query GetLogins($email: String) {
			PadderLogins(email: $email) {
				id
				email
				iosDeviceToken
				androidDeviceToken
				landlord {
					id
					firstName
					lastName
					email
					phoneNumber
				}
				tenant {
					id
					firstName
					lastName
					email
					phoneNumber
					household {
						id
					}
				}
			}
		}
	`
	return useLazyQuery<GetLogins, GetLoginsVariables>(GET_LOGIN)
}
