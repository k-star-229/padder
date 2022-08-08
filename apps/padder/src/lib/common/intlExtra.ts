// Curried Intl.NumberFormat.format
const numberFormat = options => (locale): any =>
	new Intl.NumberFormat(locale, options).format

export const formatType = numberFormat({
	style: "currency",
	currency: "USD",
})

export const FormatPrice = formatType("en-US")
