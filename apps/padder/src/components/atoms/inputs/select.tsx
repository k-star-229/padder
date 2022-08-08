import { forwardRef } from "react"
import Select, { Props } from "react-select"

import Label from "../label"

interface SelectCustomProps extends Props {
	label?: string
}

export const SelectInput: React.FC<SelectCustomProps> = forwardRef<
	any,
	SelectCustomProps
>(({ label, ...rest }, ref) => {
	return (
		<>
			{label && (
				<Label
					title={label}
					fontSize='0.7rem'
					weight='600'
					paddings='0.5rem 0 0 0'
				/>
			)}
			<Select ref={ref} className='my-1' {...rest} />
		</>
	)
})

SelectInput.displayName = "Select Input"
