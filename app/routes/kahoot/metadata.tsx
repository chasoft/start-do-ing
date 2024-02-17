/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconGoGame } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const KAHOOT: Block<"kahoot"> = {
	id: "kahoot",
	icon: { data: IconGoGame, color: "#000" },
	title: "Kahoot",
	description: "Play online quiz games",
	to: "/kahoot",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-yellow-200",
		bgLighter: "bg-yellow-100",
		bgDarker: "bg-yellow-300"
	},
	updates: []
}
