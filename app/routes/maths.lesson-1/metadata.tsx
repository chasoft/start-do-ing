/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconNumber1 } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_1: Block<MathsLayoutId> = {
	id: "maths-1",
	icon: { data: <IconNumber1 />, color: "#000" },
	title: "Maths 1",
	description: "Fast maths for kids 1",
	to: "/maths/lesson-1",
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
