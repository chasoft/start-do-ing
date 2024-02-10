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

export const OTHERS: Block<"others"> = {
	id: "others",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Others",
	description: "Interesting things",
	to: "/others",
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
