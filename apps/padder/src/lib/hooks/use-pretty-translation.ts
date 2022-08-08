import { toPrettyNameCode } from "../utils"
import {
	TranslationKeys,
	useTypeSafeTranslation,
} from "./use-typesafe-translation"

export default function usePrettyTranslation(): {
	t: (s: TranslationKeys | string, p?: string) => string
} {
	const { t } = useTypeSafeTranslation()

	return {
		// String to be translated and optional prefix
		t: (s: TranslationKeys | string, p?: string) =>
			t(`${p ? `${toPrettyNameCode(p)}.` : ""}${toPrettyNameCode(s)}`),
	}
}
