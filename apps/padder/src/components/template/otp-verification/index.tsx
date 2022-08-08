import { useRouter } from "next/router"

import { Boldtext, CodeWrapper, Padding } from "../../../styles/global"
import { ArrowLeft } from "../../atoms/back-arrow-icon/back-arrow"
import { ButtonComp } from "../../atoms/buttons/button"
import PrimaryText from "../../atoms/text-component"
import { PageStepper } from "../../atoms/top-stepper"
import { ProfileHeading } from "../../molecules/profile-heading"

const PinVerificationTemplate: React.FC = () => {
	const { push } = useRouter()
	return (
		<CodeWrapper className='bg-[#FBFBFB] h-screen'>
			<ArrowLeft src={"/svg/back-arrow.svg"} alt={"back-arrow"} />
			<PageStepper />
			<CodeWrapper className='px-6'>
				<ProfileHeading title={"Enter Verification Code"}>
					<>
						Enter code that we have sent to your email
						<Boldtext> jaymes_avery@gmail.com</Boldtext>
					</>
				</ProfileHeading>
				<ButtonComp
					onClick={(): Promise<boolean> => push("/profile-step3")}
					bgColor='var(--btn-primary)'
				>
					Verify
				</ButtonComp>
				<Padding padding='1.25rem 0'>
					<PrimaryText
						size='md'
						height='lg'
						weight='bold'
						align='center'
						color='textdark'
					>
						Resend Code
					</PrimaryText>
				</Padding>
			</CodeWrapper>
		</CodeWrapper>
	)
}
export default PinVerificationTemplate
