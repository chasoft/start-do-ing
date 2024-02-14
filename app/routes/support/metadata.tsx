/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SUPPORT: Block<"support"> = {
	id: "support",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Support",
	description: "Support my work",
	to: URLS.support.to,
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-fuchsia-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
