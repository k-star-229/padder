import { yupResolver } from "@hookform/resolvers/yup"
import { User } from "firebase/auth"
import { Spinner } from "kl-core"
import Image from "next/image"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { handleAuthError } from "../../../helpers/handle-auth-error"
import { EmailPasswordSignUp } from "../../../lib/plugins/plugin-manager"
import { useToastStore } from "../../../state-machine/use-toast-store"
import { useUserForm } from "../../../state-machine/use-user-form"
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
import StepperHeader from "../../organisms/stepper-header"
import { ThirdPartyAuth } from "../../plugins/third-party-auth"

const schema = yup
	.object({
		email: yup
			.string()
			.required("Email is required")
			.email("Must be a valid email e.g. abcd@gmail.com"),
		password: yup.string().required("Password is required"),
		fullname: yup.string().required("Fullname is required"),
		phoneNumber: yup.number().required("Phone Number is required"),
	})
	.required()

interface FormIProps {
	fullname: string
	email: string
	password: string
	phoneNumber: number
}

const SignUpTemplate: React.FC = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormIProps>({
		resolver: yupResolver(schema),
	})
	const { showToast } = useToastStore()
	const { setPhoneNumber } = useUserForm()

	const onSubmit = (data: FormIProps): void => {
		EmailPasswordSignUp(
			data.email,
			data.password,
			data.fullname,
			async (res: User, error) => {
				if (error) {
					handleAuthError(error, showToast)
					return
				}
				setPhoneNumber(data?.phoneNumber)
				router.push(createRoute(PlainRoutes.uploadDocument))
			}
		)
	}

	return (
		<>
			<DesktopHeader />
			<div className='container mx-auto flex items-center justify-between gap-12'>
				<div className='w-full md:w-2/5 bg-[#FBFBFB] md:bg-transparent h-screen md:h-auto'>
					<h2 className='text-[#0097A0] text-4xl leading-54 font-bold hidden md:block'>
						Split your rent
					</h2>
					<h2 className='text-[#0097A0] text-4xl leading-54 font-bold text-right hidden md:block'>
						Fractional deposits
					</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<StepperHeader />
						<CodeWrapper className='px-6'>
							<MarginB>
								<PrimaryText size='xl' height='xl' weight='medium'>
									Sign-up
								</PrimaryText>
							</MarginB>
							<InputField
								error={errors?.fullname}
								type='text'
								placeholder='Fullname'
								{...register("fullname")}
							/>
							<InputField
								error={errors?.email}
								type='email'
								placeholder='EMAIL'
								{...register("email")}
							/>
							<InputField
								error={errors?.phoneNumber}
								type='number'
								placeholder='Phone Number'
								{...register("phoneNumber")}
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
							<ButtonComp bgColor={"var(--btn-primary)"} type='submit'>
								{false ? <Spinner /> : "Sign up"}
							</ButtonComp>
							<TextCenter className='py-2'>or</TextCenter>
							<SpaceY>
								<ThirdPartyAuth />
							</SpaceY>

							<TextCenter>
								<FormSwitchButton
									buttonType={{
										value: PlainRoutes.login,
										label: "Login",
									}}
								/>
								<AuthTerms isSignUp />
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
		</>
	)
}
export default SignUpTemplate
