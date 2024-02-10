/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, SystemLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

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
	to: "/",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		primaryBg: "bg-gray-300"
	},
	versioning: {
		releaseDate: new Date(),
		major: 0,
		minor: 1
	}
}
