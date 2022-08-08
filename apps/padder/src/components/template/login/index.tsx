import { yupResolver } from "@hookform/resolvers/yup"
import { useGetLogin } from "iris/lib/gql/mutation/use-add-login"
import { Spinner } from "kl-core"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { useCheckUserLogin } from "../../../helpers/check-user-login"
import { handleAuthError } from "../../../helpers/handle-auth-error"
import { EmailPasswordSignIn } from "../../../lib/plugins/plugin-manager"
import { useToastStore } from "../../../state-machine/use-toast-store"
import {
	CodeWrapper,
	MarginB,
	SpaceY,
	TextCenter,
} from "../../../styles/global"
import { ButtonComp } from "../../atoms/buttons/button"
import { InputField } from "../../atoms/inputs/input-field"
import PrimaryText from "../../atoms/text-component"
import { DesktopHeader } from "../../molecules/desktop-header"
import { FormSwitchButton } from "../../molecules/forms/form-switch-btn"
import { AuthTerms } from "../../molecules/terms-conditions/auth-terms"
import { ThirdPartyAuth } from "../../plugins/third-party-auth"

const schema = yup
	.object({
		email: yup
			.string()
			.required("Email is required")
			.email("Must be a valid email e.g. abcd@gmail.com"),
		password: yup.string().required("Password is required"),
	})
	.required()

interface LoginFormProps {
	email: string
	password: string
}

export const LoginTemplate: React.FC = () => {
	const router = useRouter()
	const values = useCheckUserLogin()
	const { showToast } = useToastStore()
	const [getLogin] = useGetLogin()
	// const { isLoggedIn } = values

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>({
		resolver: yupResolver(schema),
	})

	const handleNavigation = async (email): Promise<void> => {
		const { data } = await getLogin({
			variables: {
				email,
			},
		})
		if (data && data.PadderLogins.length > 0) {
			const login = data.PadderLogins[0]
			if (login?.tenant?.id) {
				router.push(createRoute(PlainRoutes.tenant))
			} else if (login?.landlord?.id) {
				router.push(createRoute(PlainRoutes.landlord))
			}
		}
	}

	const onSubmit = ({ email, password }: LoginFormProps): void => {
		EmailPasswordSignIn(email, password, async (res, error) => {
			if (error) {
				handleAuthError(error, showToast)
				return
			}
			if (res) {
				await handleNavigation(res?.email)
			} else if (error) {
				if (error?.message) {
					showToast({
						title:
							error.code === "auth/wrong-password"
								? "Incorrect credentials, Try again"
								: error?.message,
						show: true,
						type: "error",
					})
				}
			}
		})
	}

	// useEffect(() => {
	// 	if (values.isLoggedIn) {
	// 		handleNavigation(values?.user?.email)
	// 	}
	// }, [values])

	if (values.loading) {
		return <Spinner />
	}

	return (
		<div className='bg-[#FBFBFB] md:bg-transparent h-screen md:h-auto'>
			<DesktopHeader />
			<div className='container mx-auto flex items-center justify-between gap-12'>
				<div className='w-full md:w-2/5 bg-[#FBFBFB] md:bg-transparent h-screen md:h-auto'>
					<CodeWrapper className='px-6 mb-6 hidden md:block' >
						<h2 className='text-[#0097A0] text-4xl leading-54 font-bold '>
							Split your rent
						</h2>
						<h2 className='text-[#0097A0] text-4xl leading-54 font-bold text-right '>
							Fractional deposits
						</h2>
					</CodeWrapper>
					<form onSubmit={handleSubmit(onSubmit)}>
						<CodeWrapper className='px-6 flex flex-col justify-center h-screen md:h-auto'>
							<MarginB>
								<PrimaryText size='xl' height='xl' weight='medium'>
									Login
								</PrimaryText>
							</MarginB>
							<InputField
								error={errors?.email}
								type='text'
								placeholder='EMAIL'
								{...register("email")}
							/>
							<InputField
								error={errors?.password}
								type='password'
								placeholder='PASSWORD'
								{...register("password")}
							/>
							<MarginB space='1.25rem'>
								<PrimaryText size='sm' weight='medium' height='lg'>
									Forgot Password
								</PrimaryText>
							</MarginB>
							<ButtonComp bgColor='var(--btn-primary) ' type='submit'>
								Log in
							</ButtonComp>
							<TextCenter className='py-2'>or</TextCenter>
							<SpaceY>
								<ThirdPartyAuth />
							</SpaceY>
							<TextCenter>
								<FormSwitchButton
									buttonType={{
										label: "Sign Up",
										value: PlainRoutes.signUp,
									}}
								/>
								<AuthTerms />
							</TextCenter>
						</CodeWrapper>
					</form>
				</div>
				<div className=' w-3/5 hidden md:block justify-center relative'>
					<Image
						src='/signup-bannner.png'
						alt='alt-text'
						width='860'
						height='895'
					/>
					<h2 className='text-white bg-dark-50 text-4xl font-bold py-4 px-7 rounded-xl center-text'>
						Let padder ease your expenses
					</h2>
				</div>
			</div>
		</div>
	)
}
