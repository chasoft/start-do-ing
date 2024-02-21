/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconBooks } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BOOKS: Block<"books"> = {
	id: "books",
	icon: { data: IconBooks },
	title: "Books",
	description:
		"Expand your horizons with books on computers, programming, math, and the mind. Find the perfect resource to ignite your curiosity and fuel your journey.",
	to: URLS.books.to,
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
