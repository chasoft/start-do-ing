/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, FeatureLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/**************************************************************************
 *
 *  Last block (which is used for block #16)
 *
 *************************************************************************/

export const LAST_BLOCK: Block<FeatureLayoutId> = {
	id: "last",
	icon: undefined,
	title: "Manage",
	description: "Manage your blocks",
	to: "/dashboard",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-gray-300",
		bgLighter: "bg-gray-100",
		bgDarker: "bg-gray-300"
	},
	updates: null
}
