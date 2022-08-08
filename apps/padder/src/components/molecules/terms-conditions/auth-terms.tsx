import PrimaryText from "../../../components/atoms/text-component"
import { Boldtext, Padding } from "../../../styles/global"

export const AuthTerms: React.FC<{
	isSignUp?: boolean
}> = ({ isSignUp }) => {
	return (
		<Padding padding='1.25rem 2.5rem'>
			<PrimaryText
				size='xs'
				height='md'
				color='seconadry'
				weight='medium'
				align='center'
			>
				<>
					By signing {isSignUp ? "up" : "in"}, I agree with
					<Boldtext> Term of Use</Boldtext> and
					<Boldtext> Privacy Policy</Boldtext>
				</>
			</PrimaryText>
		</Padding>
	)
}
