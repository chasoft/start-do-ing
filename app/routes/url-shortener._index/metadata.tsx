/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, UrlShortenerLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const URL_SHORTENER_INDEX: Block<UrlShortenerLayoutId> = {
	id: "url-shortener-index",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "URL Shortener",
	description: "Short URLs for actions",
	to: "/url-shortener",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		primaryBg: "bg-fuchsia-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
