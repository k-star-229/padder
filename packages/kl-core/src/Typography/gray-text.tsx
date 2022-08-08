import { WithChildren } from "../system-types/with-children"
import { GrayText } from "./style"

export const GrayTextBox: React.FC<WithChildren> = ({ children }) => {
	return <GrayText>{children}</GrayText>
}
