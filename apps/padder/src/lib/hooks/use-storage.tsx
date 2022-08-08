import { useEffect } from "react"

export default function useStorage({
	storage = "localStorage",
}: {
	storage?: "localStorage" | "sessionStorage"
}): {
	setStorageValue: (key: string, value: string) => void
	getStorageValue: (key: string, value: string) => void
} {
	useEffect(() => {
		if (typeof window === "undefined") {
			return
		}
	}, [window])

	function setStorageValue(key: string, value: string): void {
		if (typeof window !== "undefined") {
			window[storage].set(key, value)
		}
	}

	function getStorageValue(key: string, value: string): void {
		if (typeof window !== "undefined") {
			window[storage].set(key, value)
		}
	}

	return {
		setStorageValue,
		getStorageValue,
	}
}
