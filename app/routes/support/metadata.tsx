/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHeart } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SUPPORT: Block<"support"> = {
	id: "support",
	icon: { data: <IconHeart />, color: "#000" },
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
	updates: null
}
