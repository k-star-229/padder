import { useRouter } from "next/router"
import { useState } from "react"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { useCheckUserLogin } from "../../../helpers/check-user-login"
import { handleAuthError } from "../../../helpers/handle-auth-error"
import { useAddUpdateTenant } from "../../../shared-hooks/add-update-tenant"
import { useFileStore } from "../../../state-machine/use-file-store"
import { useToastStore } from "../../../state-machine/use-toast-store"
import { useUserForm } from "../../../state-machine/use-user-form"
import { UserType } from "../../../static/enums/common"
import {
	CodeWrapper,
	GroupButton,
	HOCBottomWrapper,
	ItemAlignments,
	Layout,
	MarginB,
	Padding,
} from "../../../styles/global"
import { ArrowLeft } from "../../atoms/back-arrow-icon/back-arrow"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import PrimaryText from "../../atoms/text-component"
import { PageStepper } from "../../atoms/top-stepper"
import { ImageInput } from "../../molecules/image-input"
import { ProfileHeading } from "../../molecules/profile-heading"

const UploadDocumentTemplate: React.FC = () => {
	const { push } = useRouter()
	const [active, setActive] = useState(UserType.landlord)
	const { addTenantHandler } = useAddUpdateTenant()
	const { user } = useCheckUserLogin()
	const { showToast } = useToastStore()
	const { phoneNumber } = useUserForm()
	const { images, clearStoreImages } = useFileStore()

	const handleChangeUserType = (user: UserType): void => {
		setActive(user)
		clearStoreImages()
	}

	const handleAddTenant = async (): Promise<void> => {
		const { displayName, email } = user
		const fullname = displayName?.split(" ")
		try {
			await addTenantHandler(
				{
					firstName: fullname[0],
					lastName: fullname[1],
					email: email,
					// TODO: phone number is static for now
					phoneNumber: phoneNumber?.toString() || "99999999",
					verified: true,
					approved: true,
				},
				{
					loginType: active,
				}
			)
			if (active === UserType.landlord) {
				push(createRoute(PlainRoutes.landlord))
			} else if (active === UserType.renter) {
				push(createRoute(PlainRoutes.tenant))
			}
		} catch (error) {
			console.log('error', error)
			if (error) {
				handleAuthError(error, showToast)
				return
			}
		}
	}

	const handleSave = async (): Promise<void> => {
		await handleAddTenant()
		// if (data && data.Logins.length > 0) {
		// 	const login = data.Logins[0]
		// 	if (login?.tenant?.id) {
		// 		push(createRoute(PlainRoutes.tenant))
		// 	} else if (login?.landlord?.id) {
		// 		push(createRoute(PlainRoutes.landlord))
		// 	}
		// }
	}

	return (
		<Layout bgColor='#fff'>
			<ArrowLeft src={"/svg/back-arrow.svg"} alt={"alt-text"} />
			<PageStepper />
			<CodeWrapper className='px-6'>
				<ProfileHeading title={"Upload your documents"}>
					Provide your profile picture and display name to join the community
				</ProfileHeading>
				<Padding padding='0 0.75rem'>
					<PrimaryText size='xs' height='lg'>
						I am a...
					</PrimaryText>
					<ItemAlignments>
						<GroupButton
							onClick={(): void => handleChangeUserType(UserType.landlord)}
							active={active === UserType.landlord}
							borderRadius='5px 0 0 5px'
						>
							LANDLORD
						</GroupButton>
						<GroupButton
							onClick={(): void => handleChangeUserType(UserType.renter)}
							active={active === UserType.renter}
							borderRadius='0 5px 5px 0'
						>
							RENTER
						</GroupButton>
					</ItemAlignments>
				</Padding>
				<div className='space-y-2'>
					<ImageInput
						active={!!images.frontDl}
						name='frontDl'
						label='Front of your driver’s license'
					/>
					<ImageInput
						active={!!images.backDl}
						name='backDl'
						label='Front of your driver’s license'
					/>
				</div>
			</CodeWrapper>
			<HOCBottomWrapper bgColor='transparent'>
				<Padding padding='1rem 2rem'>
					<MarginB>
						<CodeWrapper onClick={handleAddTenant}>
							<PrimaryText
								size='xs'
								height='lg'
								color='seconadry'
								align='center'
							>
								Skip for now
							</PrimaryText>
						</CodeWrapper>
					</MarginB>
					<BottomButton
						onClick={handleSave}
						title={"All Done"}
						bgColor='var(--btn-primary)'
					/>
				</Padding>
			</HOCBottomWrapper>
		</Layout>
	)
}
export default UploadDocumentTemplate
