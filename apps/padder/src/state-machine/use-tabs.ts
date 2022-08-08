import create from "zustand"
import { combine, persist } from "zustand/middleware"

export enum Step3Tabs {
	"description" = "description",
	"verification" = "verification",
	"bankDetails" = "bankDetails",
}

export const useTabs = create<any>(
	persist(
		combine(
			{
				step2: {
					tab: null,
					meta: undefined,
				},
				step3: {
					// The tab ID is static and tabs data is also static
					tab: 1,
					meta: undefined,
				},
			},
			set => ({
				setStep2Tabs: (newState): any => {
					return set(state => ({
						step2: {
							...state.step2,
							...newState,
						},
					}))
				},
				setStep3Tabs: (newState): any => {
					return set(state => ({
						step3: {
							...state.step3,
							...newState,
						},
					}))
				},
			})
		),
		{
			name: "v_step-1",
			getStorage: () => sessionStorage,
		}
	)
)
