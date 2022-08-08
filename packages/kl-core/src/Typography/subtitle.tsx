import { WithChildren } from "../system-types/with-children"
import { Subtitle } from "./style"

export const SubtitleBox: React.FC<WithChildren> = ({ children }) => {
	return <Subtitle>{children}</Subtitle>
}
