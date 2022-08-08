import { useTranslation } from "react-i18next"

import { Paths } from "../types/util-types"

export type TranslationKeys = Paths<any>

interface DateTranslationType {
	time?: Date
	date?: Date
}

interface MoneyTranslationType {
	val: number | string
}

export const useTypeSafeTranslation = (): {
	t: (s: TranslationKeys | string, f?: DateTranslationType) => string
	tm: (s: TranslationKeys | string, v: MoneyTranslationType) => string
} => {
	const { t } = useTranslation()

	return {
		// Most of the keys are backend driven so type string is also required.
		t: (s: TranslationKeys | string, f?: DateTranslationType) => t(s, f),
		// tm will translate any monetary value
		tm: (s: TranslationKeys | string, v: MoneyTranslationType) => t(s, v),
	}
}
