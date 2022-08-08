import { useRouter } from "next/router"
import { IoMdArrowBack } from "react-icons/io"
import styled from "styled-components"

import { CodeWrapper } from "../../../styles/global"

export const BackArrow = styled(IoMdArrowBack)`
	font-size: 30px;
`

interface ArrowLeftProps {
	src?: string
	alt?: string
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({ src, alt }) => {
	const router = useRouter()
	return (
		<CodeWrapper className='flex items-center py-3 px-6 bg-white mb-8'>
			<Image onClick={router.back} src={src} alt={alt} />
		</CodeWrapper>
	)
}
const Image = styled.img``
