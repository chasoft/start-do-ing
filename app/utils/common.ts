/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SITE, DEFAULT_SHARING_IMAGE } from "~/data"

/***************************************************************************
 *
 *  HOOKS
 *
 **************************************************************************/

// TODO: Sharing button will display a popup dialog when clicked
// - the user will be allowed to copy the URL to their clipboard
// - options are available like share page as is or share feature as fullscreen
export function getUrlSharingData(
	block: Block<unknown>,
	{ fullscreen = true }: { fullscreen: boolean }
) {
	return {
		title: block.title,
		description: block.description,
		url: SITE.url + block.to + `${fullscreen ? "?full=true" : ""}`,
		image: block.image ?? DEFAULT_SHARING_IMAGE
	}
}
