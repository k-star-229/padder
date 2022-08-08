import { BgColor, CodeWrapper, Padding } from "../../../styles/global"
import PrimaryText from "../text-component"

export const PageStepper: React.FC = () => {
	return (
		<>
			<CodeWrapper className='flex justify-center items-center gap-5 absolute top-2.5 translate-x-full'>
				<BgColor color='#404040' borderRadius='50%'>
					<Padding padding='6px 13px'>
						<PrimaryText color='light' size='sm' height='md'>
							1
						</PrimaryText>
					</Padding>
				</BgColor>
				<BgColor color='#404040' borderRadius='50%'>
					<Padding padding='6px 11px'>
						<PrimaryText color='light' size='sm' height='md'>
							2
						</PrimaryText>
					</Padding>
				</BgColor>
				<BgColor color='#404040' borderRadius='50%'>
					<Padding padding='6px 11px'>
						<PrimaryText color='light' size='sm' height='md'>
							3
						</PrimaryText>
					</Padding>
				</BgColor>
			</CodeWrapper>
		</>
	)
}
