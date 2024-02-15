/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLink } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const URL_SHORTENER: Block<"url-shortener"> = {
	id: "url-shortener",
	icon: { data: <IconLink />, color: "#000" },
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
	updates: null
}
