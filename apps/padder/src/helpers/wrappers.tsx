export const getLocalstorage = (key: string): any => {
	if (typeof window === "undefined") return
	const data = window.localStorage.getItem(key)
	try {
		return JSON.parse(data)
	} catch {
		return data
	}
}

export const setLocalstorage = (key: string, value: string): void => {
	if (typeof window === "undefined") return
	window.localStorage.setItem(key, value)
}
