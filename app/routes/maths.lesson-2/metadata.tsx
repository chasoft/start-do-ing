/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconNumber2 } from "@tabler/icons-react"
import { MATHS_2_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_2: Block<MathsLayoutId> = {
	id: "maths-2",
	icon: { data: IconNumber2, color: "#000" },
	title: "Maths 2",
	description: "Fast maths for kids 2",
	to: "/maths/lesson-2",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: MATHS_2_UPDATES
}
