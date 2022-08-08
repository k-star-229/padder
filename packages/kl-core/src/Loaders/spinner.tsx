import React from "react"

import { SpinnerWrapper, StyledSpinner } from "./style"

export const Spinner: React.FC = () => {
	return (
		<SpinnerWrapper>
			<StyledSpinner viewBox='0 0 50 50'>
				<circle
					className='path'
					cx='25'
					cy='25'
					r='20'
					fill='none'
					strokeWidth='4'
				/>
			</StyledSpinner>
		</SpinnerWrapper>
	)
}
