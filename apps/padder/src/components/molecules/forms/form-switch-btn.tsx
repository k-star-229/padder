import { NextPage } from "next"
import { useRouter } from "next/router"

import PrimaryText from "../../../components/atoms/text-component"
import { createRoute } from "../../../constants/routes.constant"
import { RedText } from "../../../styles/global"

export const FormSwitchButton: NextPage<{
	buttonType: {
		value: string
		label: string
	}
}> = ({ buttonType }) => {
	const router = useRouter()
	const handleAlreadyMember = (route: string): void => {
		router.push(createRoute(route))
	}
	return (
		<PrimaryText
			size='xs'
			height='md'
			color='seconadry'
			weight='medium'
			align='center'
		>
			<>
				Already a member?
				<RedText onClick={(): void => handleAlreadyMember(buttonType.value)}>
					{buttonType.label}
				</RedText>
			</>
		</PrimaryText>
	)
}
