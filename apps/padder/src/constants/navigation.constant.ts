import { ChatTab, Like, Notification, Person } from "kl-core"
import {
	CalendarIcon,
	ChatSecondary,
	HeartIcon,
	Insight,
	NavigationConstantType,
} from "kl-core/src"

export const NavigationConstant = [
	{
		id: 1,
		icon: Notification,
		title: "Alerts",
		to: "/coming-soon",
	},
	{
		id: 2,
		icon: Like,
		title: "Favourites",
		to: "/coming-soon",
	},
	{
		id: 3,
		icon: "/svg/logo2x-8.svg",
		as: "img",
		title: "Bookings",
		to: "/confirmation",
	},
	{
		id: 4,
		icon: ChatTab,
		title: "Chats",
		to: "/chat",
	},
	{
		id: 5,
		icon: Person,
		title: "Profile",
		to: "/user-profile",
	},
]

export const NavigationConstantAdmin: NavigationConstantType[] = [
	{
		id: 1,
		icon: CalendarIcon,
		title: "Upcoming",
		to: "/vendor/appointments",
		as: "svg",
	},
	{
		id: 2,
		icon: Insight,
		title: "Insights",
		to: "/vendor",
		as: "svg",
	},
	{
		id: 3,
		icon: HeartIcon,
		as: "svg",
		title: "My Bookings",
		to: "/vendor",
	},
	{
		id: 4,
		icon: ChatSecondary,
		title: "Chats",
		to: "/vendor",
		as: "svg",
	},
	{
		id: 5,
		icon: Person,
		title: "Profile",
		to: "/vendor/profile",
	},
]
