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

export const DOMAINS: Block<"domains"> = {
	id: "domains",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Domains",
	description: "Your domain assistants",
	to: "/domains",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-amber-200",
		bgLighter: "bg-amber-100",
		bgDarker: "bg-amber-300"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
