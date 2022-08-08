export interface ButtonEventsProps {
	label: string
	match: string
}

export const ButtonEvents = {
	// Keep name of all CTA actions here and keep it up to date
	CancelPayment: {
		label: "Cancel",
		match: "cancel-payment",
	},
	StartPayment: {
		label: "Pay",
		match: "start-payment",
	},
	CompletePayment: {
		label: "Compete",
		match: "complete-payment",
	},
}
