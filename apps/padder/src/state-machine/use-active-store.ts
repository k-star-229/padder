import create from "zustand"
import { combine } from "zustand/middleware"

const initialState = {
	active: {
		property: null,
	},
}

export const useActiveStore = create(
	combine(initialState, set => ({
		setActive: (newState: number | string, key: string): void => {
			return set(p => ({
				active: {
					...p.active,
					[key]: newState,
				},
			}))
		},
	}))
)
