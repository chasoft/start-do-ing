/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterC } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES_CHINESE_CHARACTERS: Block<LanguagesLayoutId> = {
	id: "chinese-characters",
	icon: { data: <IconLetterC />, color: "#000" },
	title: "Chinese Characters",
	description: "Basic Chinese-Vietnamese dictionary",
	to: "/languages/chinese-characters",
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
