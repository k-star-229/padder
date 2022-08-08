import { RiAddFill } from "react-icons/ri"
import styled from "styled-components"

const PlusIcon = styled(RiAddFill)`
	font-size: 0.875rem;
`

export const Prices = [
	{
		title: "Per Walk Rate (45 minutes)",
		message: "",
		added: "",
		name: "walkRate",
	},
	{
		title: "Additional 15 minutes",
		message: "Added to per walk rate",
		icon: <PlusIcon />,
		name: "additionalRate",
	},
	{
		title: "Additional Premium Rate",
		message: "Busy calendar days (re: holidays)",
		icon: <PlusIcon />,
		name: "premiumRate",
	},
	{
		title: "Additional Dog Rate",
		message: "Per walk per additional dog",
		added: "",
		name: "additionalDogRate",
	},
	{
		title: "Puppy Rate",
		message: "1 year or younger",
		added: "",
		name: "puppyRate",
	},
]
