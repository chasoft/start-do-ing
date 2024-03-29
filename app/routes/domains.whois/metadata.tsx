/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DomainsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconReportSearch } from "@tabler/icons-react"
import { DOMAINS_WHOIS_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS_WHOIS: Block<DomainsLayoutId> = {
	id: "domains-whois",
	icon: { data: IconReportSearch, color: "#000" },
	title: "Domains Whois",
	description: "Fastest whois lookup",
	to: "/domains/whois",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DOMAINS_WHOIS_UPDATES
}
