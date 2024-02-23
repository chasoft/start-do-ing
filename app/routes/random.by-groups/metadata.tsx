/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconUsersGroup } from "@tabler/icons-react"
import { RANDOM_BY_GROUPS_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_BY_GROUPS: Block<RandomLayoutId> = {
	id: "random-by-groups",
	icon: { data: IconUsersGroup, color: "#000" },
	title: "Random by Groups",
	description: "Split into groups",
	to: "/random/by-groups",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: RANDOM_BY_GROUPS_UPDATES
}
