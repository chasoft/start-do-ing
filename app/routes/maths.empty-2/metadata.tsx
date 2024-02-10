/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_EMPTY_2: Block<MathsLayoutId> = {
	id: "maths-empty-2",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Maths Empty 2",
	description: "Fast maths for kids 2",
	to: "/maths/empty-2",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		primaryBg: "bg-rose-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
