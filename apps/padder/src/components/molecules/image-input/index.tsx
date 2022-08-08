import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { BsFillCameraFill, BsFillFileEarmarkArrowUpFill } from "react-icons/bs"
import { FcCheckmark } from "react-icons/fc"

import { useFileStore } from "../../../state-machine/use-file-store"

interface ImpageInputProps {
	label?: string
	name: string
	active?: boolean
	type?: "image" | "doc"
	isMulti?: boolean
}

export const ImageInput: React.FC<ImpageInputProps> = ({
	label,
	name,
	active,
	type = "image",
	isMulti,
}) => {
	const { setImages } = useFileStore()
	const onDrop = useCallback(acceptedFiles => {
		setImages(acceptedFiles[0], name, isMulti)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
	})

	const iconStyle = `h-12 w-12 ${active ? "text-primary" : "text-gray-400"}`

	return (
		<div className='my-4'>
			{label && <div className='py-1'>{label}</div>}
			<div
				className={`border rounded ${
					active ? "border-primary" : "border-gray-400"
				} p-6 flex justify-center items-center`}
				{...getRootProps()}
			>
				<input accept='' {...getInputProps()} />
				{active ? (
					<FcCheckmark className={iconStyle} />
				) : type === "image" ? (
					<BsFillCameraFill className={iconStyle} />
				) : (
					<BsFillFileEarmarkArrowUpFill className={iconStyle} />
				)}
			</div>
		</div>
	)
}
