import Image from "next/image"

import { BgColor, CodeWrapper, ItemAlignments } from "../../../styles/global"
import { Button } from "../../atoms/buttons/button"

export const DesktopHeader: React.FC = () => {
	return (
		<BgColor className='hidden md:flex justify-between items-center px-9 py-7 shadow-md '>
			<Image src='/svg/logo.svg' alt='alt-text' width='250' height='42' />
			<ItemAlignments columnGap='3rem'>
				<CodeWrapper className='text-[28px] leading-10 font-bold cursor-pointer'>
					Settings
				</CodeWrapper>
				<CodeWrapper className='text-[28px] leading-10 font-bold cursor-pointer'>
					Profile
				</CodeWrapper>
				<CodeWrapper className='text-[28px] leading-10 font-bold cursor-pointer'>
					Log In
				</CodeWrapper>
				<Button
					bgColor='var(--btn-primary)'
					width='auto'
					border='none'
					borderRadius='10px'
					fontSize='1.75rem'
					weight='700'
					padding='.75rem 3rem'
				>
					Open Account
				</Button>
			</ItemAlignments>
		</BgColor>
	)
}
