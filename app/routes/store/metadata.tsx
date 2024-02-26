/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconShoppingCart } from "@tabler/icons-react"
import { URLS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const STORE: Block<"store"> = {
	id: "store",
	icon: { data: IconShoppingCart, color: "#000" },
	title: "Store",
	description: "Store, your trusted hi-tech products to buy.",
	to: URLS.store.to,
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-fuchsia-200",
		bgLighter: "bg-fuchsia-100",
		bgDarker: "bg-fuchsia-300"
	},
	updates: []
}
