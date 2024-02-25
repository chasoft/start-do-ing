/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconUserHexagon } from "@tabler/icons-react"
import { RANDOM_USERNAME_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_USERNAME: Block<RandomLayoutId> = {
	id: "random-username",
	icon: { data: IconUserHexagon, color: "#000" },
	title: "Username Generator",
	description: "Give me a name!",
	to: "/random/username",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: RANDOM_USERNAME_UPDATES
}
