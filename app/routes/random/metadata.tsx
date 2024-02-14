/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM: Block<"random"> = {
	id: "random",
	icon: { data: <IconAlertTriangle />, color: "#000" },
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
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
