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

export const LANGUAGES: Block<"languages"> = {
	id: "languages",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Languages",
	description: "Human languages",
	to: "/languages",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-lime-200",
		bgLighter: "bg-lime-100",
		bgDarker: "bg-lime-300"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
