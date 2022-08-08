import { useRouter } from "next/router"

import { FacebookSignUp, GoogleSignIn } from "../../lib/plugins/plugin-manager"
import ButtonWithIcon, {
	FbIcon,
	GoogleIcon,
} from "../atoms/buttons/button-with-icon"

export const ThirdPartyAuth: React.FC = () => {
	const router = useRouter()

	const handleGoogleLogin = (): void => {
		GoogleSignIn(() => router.push("/"))
	}

	const handleFacebookLogin = (): void => {
		FacebookSignUp(() => router.push("/"))
	}

	return (
		<>
			<ButtonWithIcon
				Icon={<FbIcon />}
				title={"Connect with Facebook"}
				color={"#3b5899"}
				onClick={handleFacebookLogin}
			/>
			<ButtonWithIcon
				onClick={handleGoogleLogin}
				Icon={<GoogleIcon />}
				title={"Connect with Google"}
			/>
		</>
	)
}
