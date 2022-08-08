 

import { EmptyProps } from "./empty"
import { InfoText } from "./style"

export interface FieldErrorProps {
	message: string
	type?: EmptyProps["type"]
}

export const FieldError: React.FC<FieldErrorProps> = ({
	message,
	type = "error",
}) => <>{message ? <InfoText type={type}>{message}</InfoText> : ""}</>
