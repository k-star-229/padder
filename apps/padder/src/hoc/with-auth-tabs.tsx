import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"

import NavigationTabs from "../components/molecules/bottom-navs"
import { useCheckUserLogin } from "../helpers/check-user-login"
import { getLocalstorage } from "../helpers/wrappers"

interface withAuthTabsProps {
	Component: React.FC
	isProtected?: boolean
}

export const withAuthTabs = ({ Component, isProtected }: withAuthTabsProps) => {
	// eslint-disable-next-line react/display-name
	return (props): JSX.Element => {
		const [isLoading, setIsLoading] = useState(true)
		const { isLoggedIn } = useCheckUserLogin()
		const router = useRouter()

		const CheckUser = (): void => {
			const user = getLocalstorage("user")
			if (!user || !user.email) {
				router.push("/login")
			}
		}

		useEffect(() => {
			if (isProtected) {
				CheckUser()
			}
			setIsLoading(false)
		}, [isProtected])

		return (
			<>
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					isLoggedIn && (
						<div>
							<div>
								<Component {...props} />
							</div>
							<NavigationTabs />
						</div>
					)
				)}
			</>
		)
	}
}
