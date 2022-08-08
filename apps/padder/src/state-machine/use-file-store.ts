import { isArray } from "lodash"
import create from "zustand"
import { combine } from "zustand/middleware"

const initialState = {
	images: {
		frontDl: "",
		backDl: "",
		maintenancePhotos: [],
	},
	docs: {
		tenantAgreement: "",
	},
}

export const useFileStore = create(
	combine(initialState, set => ({
		setImages: (newState: File, key: string, isMulti?: boolean): void => {
			return set(p => {
				return {
					images: {
						...p.images,
						[key]: isMulti
							? isArray(p.images[key]) && p.images[key].length > 0
								? [...p.images[key], newState]
								: [newState]
							: newState,
					},
				}
			})
		},
		clearStoreImages: (): void => {
			return set(() => ({ images: initialState.images }))
		},
	}))
)
