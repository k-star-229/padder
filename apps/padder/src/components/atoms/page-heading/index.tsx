import PrimaryText from "../text-component"

interface PageHeadingProps {
	title?: string
}

export const PageHeadings: React.FC<PageHeadingProps> = ({ title }) => (
	<PrimaryText size='lg' color='dark' weight='bold' height='lg'>
		{title}
	</PrimaryText>
)
