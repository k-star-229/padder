import { useEffect, useState } from "react"

export const useGetQuery = GetFunc => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		GetFunc()
			.then(rs => {
				setData(rs)
				setLoading(false)
			})
			.catch(e => {
				setLoading(false)
			})
	}, [GetFunc])

	return {
		data,
		loading,
	}
}

export const useQueryMutate = GetFunc => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	const mutate = (args?: any) => {
		GetFunc(args)
			.then(rs => {
				setData(rs)
				setLoading(false)
			})
			.catch(e => {
				setLoading(false)
			})
	}

	return {
		data,
		loading,
		mutate,
	}
}
