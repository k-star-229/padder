import { useState } from "react"

export default function usePreviewImage(): {
	parseImage?: any
	currentImages?: any
} {
	const [currentImages, setCurrentImages] = useState("")
	const parseImage = (f: any): void => {
		const reader = new FileReader()
		reader.onloadend = (): void => {
			setCurrentImages(reader.result as string)
		}
		if (f) {
			reader.readAsDataURL(f)
			setCurrentImages(reader.result as string)
		}
	}

	return {
		parseImage,
		currentImages,
	}
}
