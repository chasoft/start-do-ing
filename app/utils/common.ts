/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import groupByFunc from "lodash.groupby"

/* COMPONENTS & UTILS */
import type { Block, ReleaseWithMetadata, TColor } from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SITE, DEFAULT_SHARING_IMAGE, COLORS, DEFAULT_COLORS } from "~/data"

/***************************************************************************
 *
 *  START
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

export function getBlockColor(blockIndex: number, defaultColor: TColor = DEFAULT_COLORS) {
	const color = COLORS[blockIndex] ?? defaultColor
	return color
}

const formatReleaseDate = (date: number) => {
	const d = new Date(date)
	return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}

/**
 * get all release updates grouped by released date
 */
export function getAllReleaseUpdates(blocks: Array<Block<unknown>>) {
	const releases = blocks
		.reduce((allUpdates, block) => {
			const blockUpdates = block.updates
				? block.updates.map((update) => ({
						...update,
						date: formatReleaseDate(update.date),
						title: block.title,
						to: block.to,
						icon: block.icon
					}))
				: []
			return [...allUpdates, ...blockUpdates] as Array<ReleaseWithMetadata>
		}, [] as Array<ReleaseWithMetadata>)
		.sort((release1, release2) => release1.date - release2.date)
	return groupByFunc(releases, (release: ReleaseWithMetadata) => release.date)
}
