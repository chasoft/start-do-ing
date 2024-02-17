/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, FeatureLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URLS } from "./urls"

/**************************************************************************
 *
 * Side blocks
 * Could be used for ads / event's banners / featured content
 *
 *************************************************************************/

export const SIDE_BLOCKS: {
	LEFT: Block<FeatureLayoutId>
	RIGHT: Block<FeatureLayoutId>
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
	RIGHT: {
		id: "right",
		icon: undefined,
		title: "Right block",
		description: "Right block",
		to: URLS.home.to,
		group: [],
		favorite: false,
		color: {
			text: "#000",
			bgNormal: "bg-yellow-300",
			bgLighter: "bg-yellow-100",
			bgDarker: "bg-yellow-300"
		},
		updates: []
	}
}
