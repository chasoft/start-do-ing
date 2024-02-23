/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DomainsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconTractor } from "@tabler/icons-react"
import { DOMAINS_BUILDER_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS_BUILDER: Block<DomainsLayoutId> = {
	id: "domains-builder",
	icon: { data: IconTractor, color: "#000" },
	title: "Domains Builder",
	description: "Find your desired domain names",
	to: "/domains/builder",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DOMAINS_BUILDER_UPDATES
}
