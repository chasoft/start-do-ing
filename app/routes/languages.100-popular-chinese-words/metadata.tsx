/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES_100_POPULAR_CHINESE_WORDS: Block<LanguagesLayoutId> = {
	id: "100-popular-chinese-words",
	icon: { data: <IconAlertTriangle />, color: "#000" },
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
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
