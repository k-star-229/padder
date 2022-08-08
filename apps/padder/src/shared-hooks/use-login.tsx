import { GetLogins } from "iris/lib/gql/mutation/__generated__/GetLogins"
import { useGetLogin } from "iris/lib/gql/mutation/use-add-login"
import { useEffect } from "react"

import { useCheckUserLogin } from "../helpers/check-user-login"

export const useLogin = (): {
	data: GetLogins
	loading: boolean
} => {
	const [getLogin, { data, loading }] = useGetLogin()
	const { user } = useCheckUserLogin()

	useEffect(() => {
		if (user) {
			getLogin({
				variables: {
					email: user?.email,
				},
			})
		}
	}, [])

	return {
		data,
		loading,
	}
}
