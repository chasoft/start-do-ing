/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCloud } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS: Block<"domains"> = {
	id: "domains",
	icon: { data: <IconCloud />, color: "#000" },
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
	updates: null
}
