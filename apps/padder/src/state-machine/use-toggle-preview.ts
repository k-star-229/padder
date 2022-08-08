import create from "zustand"
import { combine } from "zustand/middleware"

const initialState: {
	[key: string]: string | number
} = {}

export const useTogglePreview = create(
	combine(
		{
			togglePreview: false,
			previewData: initialState,
		},
		set => ({
			setTogglePreview: (data?: { [key: string]: string | number }) => {
				return set(s => ({
					togglePreview: !s.togglePreview,
					previewData: data ? data : {},
				}))
			},
		})
	)
)
