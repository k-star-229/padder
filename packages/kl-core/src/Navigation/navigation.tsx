import { NavTabs, NavTitle, StyledIcon, StyledNavs } from "./style"
import Image from "next/image"
import { useRouter } from "next/router"
import * as React from "react"

export type NavigationConstantType = {
	id: number
	icon: string | React.FC
	title: string
	as?: "svg" | "img" | "icon"
	to: string
	colorScheme?: {
		textColor?: string
		iconColor?: { [key: string]: string }
	}
}

export type TabsProps = {
	navigate: boolean
	NavigationConstant: NavigationConstantType[]
}

export const Tabs: React.FC<TabsProps> = ({ NavigationConstant }) => {
	const router = useRouter()
	const handleNav = async (to: string) => {
		let from = "home"
		const path = router.pathname
		if (path === to) {
			return
		}
		if (path !== "/") {
			from = path
		}
		await router.push(`/${to}`)
	}

	const renderIcon = (N: NavigationConstantType) => {
		if (!N.as || N.as === "icon") return <N.icon />
		switch (N.as) {
			case "img":
				return (
					typeof N.icon === "string" && (
						<img src={N.icon} alt={N.title} width={20} height={"20"} />
					)
				)
			case "svg":
				return <N.icon />
		}
	}

	return (
		<StyledNavs>
			{NavigationConstant.map(n => {
				return (
					<NavTabs onClick={() => handleNav(n.to)} key={n.id}>
						{renderIcon(n)}
						<NavTitle>{n.title}</NavTitle>
					</NavTabs>
				)
			})}
		</StyledNavs>
	)
}
