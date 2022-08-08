import Image from "next/image"
import { useRouter } from "next/router"

import { ItemAlignments, Padding, TextCenter } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface MyTenantUsersProps {
	name?: string
	name2?: string
}

const MyTenantUsers: React.FC<MyTenantUsersProps> = ({ name, name2 }) => {
	const { push } = useRouter()
	const userIdNavigation = (): void => {
		push("/landlord/2")
	}
	return (
		<Padding padding='.25rem 0 1.75rem '>
			<ItemAlignments justifyContent='flex-start' columnGap='1.25rem'>
				<TextCenter onClick={userIdNavigation}>
					<Image
						src={"/svg/user-image.svg"}
						alt='alt-text'
						width={"62"}
						height={"62"}
					/>
					<PrimaryText size='xs'>{name}</PrimaryText>
				</TextCenter>
				<TextCenter>
					<Image
						src={"/svg/tenant-user.svg"}
						alt='alt-text'
						width={"62"}
						height={"62"}
					/>
					<PrimaryText size='xs'>{name2}</PrimaryText>
				</TextCenter>
			</ItemAlignments>
		</Padding>
	)
}
export default MyTenantUsers
