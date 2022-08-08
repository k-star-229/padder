import { CodeWrapper, Padding } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

interface BadgeTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string
	active?: boolean
}

const BadgeTabs: React.FC<BadgeTabsProps> = ({ title, active, ...rest }) => {
	return (
		<div {...rest}>
			<CodeWrapper
				className={`rounded-[10px] w-44 min-w-[176px] ${
					active ? "bg-p-purple-800" : "bg-p-purple-400"
				}`}
			>
				<Padding padding='.25rem  .5rem .25rem 1.125rem'>
					<PrimaryText color='light' weight='medium' height='md' size='sm'>
						{title}
					</PrimaryText>
				</Padding>
			</CodeWrapper>
		</div>
	)
}

export default BadgeTabs
