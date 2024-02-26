/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHome } from "@tabler/icons-react"
import { URLS } from "~/data"
import Logo from "~/assets/logo-startdoing.svg"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const homeLabel = "Home"

export const HOME: Block<"home"> = {
	id: "home",
	icon: {
		data: IconHome,
		logo: Logo
	},
	title: homeLabel,
	description: "",
	to: URLS.home.to,
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-gray-200",
		bgLighter: "bg-gray-100",
		bgDarker: "bg-gray-300"
	},
	updates: []
}
