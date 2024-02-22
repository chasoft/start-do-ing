/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, FeatureLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BOOKS } from "~/routes/quotes/metadata"
import { URLS } from "./urls"

/**************************************************************************
 *
 * Side blocks
 *
 *************************************************************************/

export const SIDE_BLOCKS: {
	LEFT: Block<FeatureLayoutId>
	RIGHT: Block<"quotes">
} = {
	LEFT: {
		id: "left",
		icon: undefined,
		title: "Left block",
		description: "Left block",
		to: URLS.home.to,
		group: [],
		favorite: false,
		color: {
			text: "#000",
			bgNormal: "bg-red-300",
			bgLighter: "bg-red-100",
			bgDarker: "bg-red-300"
		},
		updates: []
	},
	RIGHT: BOOKS
}
