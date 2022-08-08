import React, { useEffect, useState } from "react"

import useMobileDetect from "../../../lib/hooks/use-mobile-detect"
import { CodeWrapper } from "../../../styles/global"
import { ArrowLeft } from "../../atoms/back-arrow-icon/back-arrow"
import { PageStepper } from "../../atoms/top-stepper"

const StepperHeader: React.FC = () => {
	const currentDevice = useMobileDetect()
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		setIsMobile(currentDevice.isMobile())
	}, [currentDevice])
	return (
		<>
			{isMobile ? (
				<CodeWrapper>
					<ArrowLeft src='/svg/back-arrow.svg' alt='ArrowLeft' />
					<PageStepper />
				</CodeWrapper>
			) : (
				""
			)}
		</>
	)
}
export default StepperHeader
