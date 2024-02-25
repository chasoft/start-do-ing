/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DomainsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCategory2 } from "@tabler/icons-react"
import { DOMAINS_EXTENSIONS_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS_EXTENSIONS: Block<DomainsLayoutId> = {
	id: "domains-extensions",
	icon: { data: IconCategory2, color: "#000" },
	title: "Domains Extensions",
	description: "Explore world of domain extensions",
	to: "/domains/extensions",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DOMAINS_EXTENSIONS_UPDATES
}
