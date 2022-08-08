import { ApolloProvider } from "@apollo/client"
import { CreateClient } from "iris"
import type { AppProps } from "next/app"
import { ToastCustom } from "../components/atoms/toast"

import { Modal } from "../components/molecules/modal"
import { useCheckUserLogin } from "../helpers/check-user-login"
import { FontStyles } from "../styles/global"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const { token } = useCheckUserLogin()
	return (
		<>
			<ApolloProvider client={CreateClient(token)}>
				<Modal />
				<ToastCustom />
				<FontStyles />
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	)
}

export default MyApp
