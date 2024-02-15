/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconDevices } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS: Block<"dev-utils"> = {
	id: "dev-utils",
	icon: { data: <IconDevices />, color: "#000" },
	title: "Dev Utils",
	description: "Utils for web development",
	to: "/dev-utils",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-orange-200",
		bgLighter: "bg-orange-100",
		bgDarker: "bg-orange-300"
	},
	updates: null
}
