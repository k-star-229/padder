// id,name,seqno
// 1,completed,3
// 2,confirmed,2
// 3,pending,1
// 4,cancelled,4
// 5,archived,5

export const ApptsConstant: {
	[key: string]: {
		id: number
		label: string
		value: string
		color: string
	}
} = {
	"1": {
		id: 1,
		label: "Completed",
		value: "completed",
		color: "var(--secondary)",
	},

	"2": {
		id: 2,
		label: "Confirmed",
		value: "confirmed",
		color: "var(--green-50-75)",
	},

	"3": {
		id: 3,
		label: "Pending",
		value: "pending",
		color: "var(--purple-400)",
	},

	"4": {
		id: 4,
		label: "Cancelled",
		value: "cancelled",
		color: "var(--tomato)",
	},

	"5": {
		id: 5,
		label: "Archived",
		value: "archived",
		color: "var(--primary)",
	},
}
