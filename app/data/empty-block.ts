/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, SystemLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URLS } from "./urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BLOCK_NOT_FOUND = "404"

export const EMPTY_BLOCK: Block<SystemLayoutId> = {
	id: "empty",
	icon: undefined,
	title: "Empty block",
	description: "Empty block",
	to: URLS.home.to,
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-gray-300",
		bgLighter: "bg-gray-100",
		bgDarker: "bg-gray-300"
	},
	updates: null
}
