/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconGoGame } from "@tabler/icons-react"
import { QUIZ_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const QUIZ: Block<"quiz"> = {
	id: "quiz",
	icon: { data: IconGoGame, color: "#000" },
	title: "Online Quiz Games",
	description: "Play online quiz games",
	to: "/quiz",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-yellow-200",
		bgLighter: "bg-yellow-100",
		bgDarker: "bg-yellow-300"
	},
	updates: QUIZ_UPDATES
}
