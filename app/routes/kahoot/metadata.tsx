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

export const KAHOOT: Block<"kahoot"> = {
	id: "kahoot",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Kahoot",
	description: "Play online quiz games",
	to: "/kahoot",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		primaryBg: "bg-fuchsia-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
