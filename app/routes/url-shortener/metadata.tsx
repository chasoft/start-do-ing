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

export const URL_SHORTENER: Block<"url-shortener"> = {
	id: "url-shortener",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "URL Shortener",
	description: "Short URLs for actions",
	to: "/url-shortener",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-cyan-200",
		bgLighter: "bg-cyan-100",
		bgDarker: "bg-cyan-300"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
