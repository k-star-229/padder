import Image from "next/image"

import { CodeWrapper, ItemAlignments, Padding } from "../../../styles/global"
import PrimaryText from "../../atoms/text-component"

export const ActivityBox: React.FC<{
	srcpath?: string
	title?: string
	des?: string
	price?: string
}> = ({ srcpath, title, des, price }) => {
	return (
		<Padding padding='0.75rem 0 1.5rem'>
			<ItemAlignments justifyContent='space-between' columnGap='1rem'>
				<Image src={srcpath} alt='alt-text' width={"35"} height={"35"} />
				<CodeWrapper style={{ flex: 1 }}>
					<PrimaryText weight='normal' height='md' size='sm'>
						{title}
					</PrimaryText>
					<PrimaryText size='xs' height='md' color='seconadry'>
						{des}
					</PrimaryText>
				</CodeWrapper>
				<PrimaryText weight='normal' height='md'>
					{price}
				</PrimaryText>
			</ItemAlignments>
		</Padding>
	)
}
