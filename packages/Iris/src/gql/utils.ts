/* eslint-disable */
// @ts-nocheck
import { add, set } from "date-fns"
import _ from "lodash"
import { Property } from "./util-types"

export type Await<T> = T extends Promise<infer U> ? U : T

type Join<S1, S2> = S1 extends string
	? S2 extends string
		? `${S1}.${S2}`
		: never
	: never

export type Paths<T> = {
	[K in keyof T]: T[K] extends Record<string, unknown>
		? Join<K, Paths<T[K]>>
		: K
}[keyof T]

export type ObjectOpsType<T> = {
	arr: Array<T>
	value: number | string
	key?: string
}

type UnionTypeCheck<T> = Record<string, never> extends T[keyof T]
	? T[keyof T]
	: never

export const FlattenObject = <T>(data: T): UnionTypeCheck<T> => {
	return Object.keys(data).map((k: string) => data[k])[0]
}

export const GetObjectKeys = (obj: {
	[key: string]: string | number
}): Array<string | number> => {
	return Object.keys(obj).map(o => obj[o])
}

/**
 * @description Converts array of string into object with label and value
 * @param values Array of string
 * @returns Object
 */
export const StrToObj = (
	values: Array<string>
): Array<{ value: string; label: string }> => {
	return values.map(v => {
		return {
			value: v,
			label: v,
		}
	})
}

/**
 *
 * @param Arr: Takes an array of object
 * @param idx: A string or number value for to find index of
 * @param key: Key of object to match with
 * @returns boolean
 * @description: It seaches for the value with `FindIndex` and returns boolean on match
 */
export function isIndexIncluded<T>({
	arr,
	value,
	key,
}: ObjectOpsType<T>): boolean {
	if (!arr || arr.length === 0) {
		return false
	}
	const checkedIdx = arr?.findIndex(a => {
		return a[key] === value
	})
	return checkedIdx > -1
}

export function GetObjectFromArr<T = Record<string, never>>({
	arr,
	value,
	key,
}: ObjectOpsType<T>): T {
	return arr.find(a => {
		return a[key] === value
	})
}

export function isUpperCase(c: string): boolean {
	return c[0] == c[0].toUpperCase()
}

export function toPrettyNameCode(name: string): string {
	while (name.indexOf(" ") !== -1) {
		name =
			name.substring(0, name.indexOf(" ")) +
			"_" +
			name.substring(name.indexOf(" ") + 1, name.length)
	}
	while (name.indexOf("-") !== -1) {
		name =
			name.substring(0, name.indexOf("-")) +
			"_" +
			name.substring(name.indexOf("-") + 1, name.length)
	}
	for (let i = 0; i < name.length; i++) {
		if (isUpperCase(name.charAt(i)) && i != 0) {
			name = name.substring(0, i) + "_" + name.substring(i, name.length)
			// We have lengthened the string.
			i++
		}
	}
	while (name.indexOf("__") !== -1) {
		name = name.replace("__", "_")
	}
	return name.toLowerCase()
}

export const generatePreview = (files): string => {
	const reader = new FileReader()
	reader.onloadend = (): string => {
		return reader.result as string
	}
	if (files) {
		reader.readAsDataURL(files)
		return reader.result as string
	}
}

export const hasAdditionalAttr = (p: Property): boolean => {
	return p.attributeValues.some(a => {
		return a.attribute.name === "additional" && a.value === "true"
	})
}

export const GenerateRadioOptions = ({
	obj,
	valueKey,
	labelKey,
	options,
}: {
	obj: Array<{
		[key: string]: string
	}>
	valueKey: string
	labelKey: string
	options?: {
		enableTranslation?: boolean
		translationKey?: string
	}
}): Array<{
	value: string | number
	label: string | number
}> => {
	return obj.map(o => {
		const value = _.get(o, valueKey)
		let label = _.get(o, labelKey)
		if (options?.enableTranslation) {
			label = label.split(" ").join("_").toLowerCase()
		}
		if (options?.translationKey) {
			label = `${toPrettyNameCode(options?.translationKey)}s.${label}`
		}
		return {
			value,
			label,
		}
	})
}

export const GetValueFromId = (data, keynames: string): string => {
	return _.get(data, keynames)
}

export function toCamelCase(string): string {
	return string.charAt(0).toLowerCase() + string.slice(1)
}

export function toPascalCase(string): string {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getDates(startDate, endDate): Array<string> {
	const dates = []
	let currentDate = startDate
	while (currentDate <= endDate) {
		dates.push({
			startDate: set(currentDate, {
				hours: 0,
			}),
			endDate: add(currentDate, {
				hours: 0,
				minutes: 45,
			}),
		})
		currentDate = add(currentDate, {
			days: 1,
		})
	}
	return dates
}

export function typesafeParseInt(value: string | undefined): number {
	let returnValue
	if (typeof value === "number") {
		return value
	}
	if (typeof value === "undefined" || !value) {
		return returnValue
	}
	if (typeof value === "string") {
		returnValue = parseInt(value, 10)
	}
	return returnValue
}

export const getIds = (data, key = "id"): Array<string> | null => {
	if (data && data.length > 0) {
		return data.map(d => typesafeParseInt(d[key]))
	}
	return null
}

export const KeyNameToVariable = (data: {
	[key: string]: string
}): Array<{ [key: string]: string }> => {
	return Object.keys(data).map(d => {
		return Object.keys(data[d]).reduce(
			(acc: { [key: string]: string }, key) => {
				acc[uncapitalizeFirstLetter(key)] = data[d][key]
				return acc
			},
			{}
		)
	})
}

export function uncapitalizeFirstLetter(string: string): string {
	return string.charAt(0).toLowerCase() + string.slice(1)
}

export const addNewDeviceToken = (
	prevTokens: string[],
	newToken: string
): string[] => {
	let newTokens: string[]
	if (!prevTokens || prevTokens.length < 1) {
		newTokens = [newToken]
	} else if (prevTokens.includes(newToken)) {
		newTokens = prevTokens
	} else {
		newTokens = [...prevTokens, newToken]
	}
	return newTokens
}

export const generateOptionsFromArray = (data: Array<string>) => {
	return data.map(d => {
		return {
			label: toPascalCase(d),
			value: d,
		}
	})
}
