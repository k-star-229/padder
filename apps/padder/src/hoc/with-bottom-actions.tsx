import { Spinner } from "kl-core"
import { useRouter } from "next/router"

import { useEffect } from "react"

import { PlainRoutes, createRoute } from "../constants/routes.constant"
import { useCheckUserLogin } from "../helpers/check-user-login"
import { HOCBottomWrapper, HOCWrapper, MarginY } from "../styles/global"

interface WithBottomActionsProps {
	Component: React.FC
	isProtected?: boolean
	bottomActions?: Array<any>
}

export const withBottomActions = ({
	Component,
	isProtected,
	bottomActions,
}: WithBottomActionsProps) => {
	// eslint-disable-next-line react/display-name
	return (props): any => {
		const { replace } = useRouter()
		const { isLoggedIn, loading } = useCheckUserLogin()

		useEffect(() => {
			if (!isLoggedIn && !loading) {
				replace(createRoute(PlainRoutes.login))
			}
		}, [isLoggedIn, loading])

		if (loading) {
			return <Spinner />
		}

		return (
			<>
				<HOCWrapper>
					<div
						style={{
							flex: 1,
						}}
					>
						<Component {...props} />
					</div>
					<MarginY space='0.5rem'></MarginY>
					<HOCBottomWrapper>
						{bottomActions && bottomActions.map(b => b)}
					</HOCBottomWrapper>
				</HOCWrapper>
			</>
		)
	}
}
