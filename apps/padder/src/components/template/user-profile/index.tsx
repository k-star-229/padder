import Image from "next/image"
import { useRouter } from "next/router"
import { HiOutlineLocationMarker } from "react-icons/hi"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { useCheckUserLogin } from "../../../helpers/check-user-login"
import { logout } from "../../../lib/plugins/plugin-manager"
import {
	HOCBottomWrapper,
	ItemAlignments,
	Layout,
	MarginB,
	Padding,
	StyledIcon,
} from "../../../styles/global"
import { LogoutButton } from "../../atoms/buttons/logout-button"
import PrimaryText from "../../atoms/text-component"
import NavigationTabs from "../../molecules/bottom-navs"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import VerificationCard from "../../molecules/verification-box"
import { ProfilePicture } from "./style"

const UserProfileTemplate: React.FC = () => {
	const { push } = useRouter()
	const { user } = useCheckUserLogin()

	const handleLogout = (): void => {
		logout(() => {
			push(createRoute(PlainRoutes.login))
		})
	}

	return (
		<Layout bgColor='#f8f8f8'>
			<TopHeaderBar />
			<Padding padding='4rem 2rem'>
				<Padding padding='1rem 0'>
					<ItemAlignments>
						<ProfilePicture
							src={
								user?.photoURL
									? user?.photoURL
									: `https://ui-avatars.com/api/?name=${
											user?.displayName ? user?.displayName : "User"
									  }`
							}
							alt={user?.displayName}
							width={165}
							height={165}
						/>
					</ItemAlignments>
				</Padding>
				<ItemAlignments>
					<PrimaryText size='xxl' height='xl' weight='extra-bold'>
						{user?.displayName}
					</PrimaryText>
					<Image
						src='/svg/edit-name.svg'
						alt='Edit'
						width={"16"}
						height={"16"}
					/>
				</ItemAlignments>
				<ItemAlignments>
					<StyledIcon
						icon={<HiOutlineLocationMarker />}
						fontSize='1rem'
						color='grey'
					/>
					<PrimaryText
						size='semi-md'
						weight='medium'
						height='lg'
						color='seconadry'
					>
						Toronto, Canada
					</PrimaryText>
				</ItemAlignments>
				<VerificationCard title='verified' title2='verified' />
				<MarginB space='1.25rem'>
					<PrimaryText size='semi-md' weight='bold' height='lg'>
						Account Settings
					</PrimaryText>
				</MarginB>
				<MarginB space='1.25rem'>
					<ItemAlignments justifyContent='flex-start' columnGap='1.25rem'>
						<Image
							src={"/svg/personal.svg"}
							alt='alt-text'
							width='20'
							height='20'
						/>
						<PrimaryText size='sm' height='lg'>
							Change personal information
						</PrimaryText>
					</ItemAlignments>
				</MarginB>
				<MarginB>
					<ItemAlignments justifyContent='flex-start' columnGap='1.25rem'>
						<Image
							src={"/svg/bank-card.svg"}
							alt='alt-text'
							width='20'
							height='20'
						/>
						<PrimaryText size='sm' height='lg'>
							Link your bank account
						</PrimaryText>
					</ItemAlignments>
				</MarginB>
				<ItemAlignments justifyContent='flex-start' columnGap='1.25rem'>
					<Image
						src={"/svg/split-icon.svg"}
						alt='alt-text'
						width='20'
						height='20'
					/>
					<PrimaryText size='sm' height='lg'>
						Split Rent Cost
					</PrimaryText>
				</ItemAlignments>
			</Padding>
			<HOCBottomWrapper bgColor='transparent'>
				<Padding padding='1rem 2rem 5rem'>
					<LogoutButton title='LOG OUT' onClick={(): void => handleLogout()} />
				</Padding>
			</HOCBottomWrapper>
			<NavigationTabs />
		</Layout>
	)
}
export default UserProfileTemplate
