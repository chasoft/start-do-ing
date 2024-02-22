/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconQuote } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BOOKS: Block<"quotes"> = {
	id: "quotes",
	icon: { data: IconQuote },
	title: "Quotes",
	description:
		"Quotes that will motivate you, inspire you, and might make you tear up a bit too.",
	to: URLS.quotes.to,
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-yellow-300",
		bgLighter: "bg-yellow-100",
		bgDarker: "bg-yellow-300"
	},
	updates: []
}
