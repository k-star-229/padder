export const PlainRoutes = {
	vendorList: "vendor-list",
	selectDate: "select-date",
	signUp: "sign-up",
	login: "login",
	pinVerfication: "pin-verification",
	home: "",
	createProfile: "create-profile",
	chat: "chat",
	vendorStep2: "vendor/step2",
	vendorPendingConf: "vendor/pending-confirmation",
	appointments: "vendor/appointments",
	userProfile: "user-profile",
	addPets: "add-pets",
	appointmentId: "vendor/appointments",
}

export const createRoute = (
	r: string,
	{
		params,
		id,
	}: {
		params?: Array<{ paramKey: string; value: string }>
		id?: string | number
	} = {}
) => {
	let generatedParams = ""
	if (params && params.length > 0) {
		params.map((p, idx) => {
			if (idx === 0) {
				generatedParams += `?${p.paramKey}=${p.value}`
			} else if (idx > 0) {
				generatedParams += `&${p.paramKey}=${p.value}`
			}
		})
	}
	let appendId = ""
	if (id) {
		appendId = `/${id}`
	}
	return `/${r}${appendId}${
		generatedParams !== undefined ? generatedParams : ""
	}`
}
