/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMist } from "@tabler/icons-react"
import { OTHERS_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const OTHERS: Block<"others"> = {
	id: "others",
	icon: { data: IconMist, color: "#000" },
	title: "Others",
	description: "Interesting things",
	to: "/others",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-emerald-200",
		bgLighter: "bg-emerald-100",
		bgDarker: "bg-emerald-300"
	},
	updates: OTHERS_UPDATES
}
