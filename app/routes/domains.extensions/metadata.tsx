/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DomainsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DOMAINS_EXTENSIONS: Block<DomainsLayoutId> = {
	id: "domains-extensions",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Domains Extensions",
	description: "Explore world of domain extensions",
	to: "/domains/extensions",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		primaryBg: "bg-rose-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
