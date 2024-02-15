/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconSquareRoot2 } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS: Block<"maths"> = {
	id: "maths",
	icon: { data: <IconSquareRoot2 />, color: "#000" },
	title: "Maths",
	description: "Maths for kids",
	to: "/maths",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-green-200",
		bgLighter: "bg-green-100",
		bgDarker: "bg-green-300"
	},
	updates: null
}
