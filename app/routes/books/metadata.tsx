/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconArrowsRandom } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM: Block<"random"> = {
	id: "random",
	icon: { data: IconArrowsRandom, color: "#000" },
	title: "Random",
	description: "From numbers to everything",
	to: "/random",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-teal-200",
		bgLighter: "bg-teal-100",
		bgDarker: "bg-teal-300"
	},
	updates: []
}
