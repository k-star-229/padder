import Image from "next/image"

import { ItemAlignments, Padding } from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"

interface HeadingWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string
}

export const HeadingWithIcon: React.FC<HeadingWithIconProps> = ({ title, ...rest }) => (
	<Padding {...rest} padding='1.5rem  0 .75rem'>
		<ItemAlignments justifyContent='flex-start' columnGap='12px'>
			<PageHeadings title={title} />
			<Image
				src={"/svg/plus-icon.svg"}
				alt='alt-text'
				width={"22"}
				height={"22"}
			/>
		</ItemAlignments>
	</Padding>
)
