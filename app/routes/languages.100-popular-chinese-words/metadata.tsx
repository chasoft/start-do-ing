/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterP } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES_100_POPULAR_CHINESE_WORDS: Block<LanguagesLayoutId> = {
	id: "100-popular-chinese-words",
	icon: { data: <IconLetterP />, color: "#000" },
	title: "100 Popular Chinese Words",
	description: "Pinyin, Meaning, Strokes...",
	to: "/languages/100-popular-chinese-words",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: null
}
