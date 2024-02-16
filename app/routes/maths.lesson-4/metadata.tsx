/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconNumber4 } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_4: Block<MathsLayoutId> = {
	id: "maths-4",
	icon: { data: <IconNumber4 />, color: "#000" },
	title: "Maths 4",
	description: "Fast maths for kids 4",
	to: "/maths/lesson-4",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: []
}
