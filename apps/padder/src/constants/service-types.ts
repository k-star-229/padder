export const ServiceTypesLocal: {
	[key: string]: {
		label: string
		value: string
	}
} = {
	grooming: {
		label: "Pet Grooming",
		value: "grooming",
	},
	walking: {
		label: "Pet Walking",
		value: "walking",
	},
	training: {
		label: "Pet Boarding",
		value: "training",
	},
} as const
