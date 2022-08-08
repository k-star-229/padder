 

import { CenterDiv, InfoText } from "./style"

export interface EmptyProps {
	message?: string
	type?: "info" | "success" | "error" | "warning"
}

export const Empty: React.FC<EmptyProps> = ({ message, type }) => {
	return (
		<CenterDiv>
			<InfoText type={type}>
				{message ? message : "This section is empty"}
			</InfoText>
		</CenterDiv>
	)
}
