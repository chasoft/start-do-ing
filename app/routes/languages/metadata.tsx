/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLanguage } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES: Block<"languages"> = {
	id: "languages",
	icon: { data: IconLanguage, color: "#000" },
	title: "Languages",
	description: "Human languages",
	to: "/languages",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-lime-200",
		bgLighter: "bg-lime-100",
		bgDarker: "bg-lime-300"
	},
	updates: []
}
