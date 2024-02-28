/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import dayjs from "dayjs"
import groupByFunc from "lodash.groupby"

/* COMPONENTS & UTILS */
import type {
	Block,
	PageId,
	ReleaseWithMetadata,
	TColor,
	TablerIconComponent
} from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import {
	SITE,
	DEFAULT_SHARING_IMAGE,
	COLORS,
	DEFAULT_COLORS,
	allBlocks,
	SPR
} from "~/data"
import { IconBlank } from "~/components/icons"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

// TODO: Sharing button will display a popup dialog when clicked
// - the user will be allowed to copy the URL to their clipboard
// - options are available like share page as is or share feature as full page
export function getUrlSharingData(
	block: Block<PageId>,
	{ viewFullpage = true }: { viewFullpage: boolean }
) {
	const viewParams = viewFullpage ? `?${SPR.view.key}=${SPR.view.values.fullpage}` : ""
	return {
		layoutId: block.id,
		title: block.title,
		description: block.description,
		url: SITE.url + block.to + viewParams,
		image: block.image ?? DEFAULT_SHARING_IMAGE
	}
}

export function getBlockColor(blockIndex: number, defaultColor: TColor = DEFAULT_COLORS) {
	const color = COLORS[blockIndex] ?? defaultColor
	return color
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
					date: dayjs(update.date).format("YYYY/MM/DD"),
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

export const getIcon = (iconData?: TablerIconComponent) =>
	(iconData ?? IconBlank) as TablerIconComponent

export const allReleaseUpdates = getAllReleaseUpdates(allBlocks)

export const allReleaseUpdatesForHeatMap = () =>
	Object.entries(allReleaseUpdates).map(([key, value]) => ({
		date: key,
		count: value.length
	}))

/**
 * Latest release updates, default limit = 3
 */
export const latestReleaseUpdates = (limit: number = 3) =>
	Object.entries(allReleaseUpdates).slice(0, limit)


export const toNumber = <T>(input: T, defaultValue: number = 0): number => isNaN(Number(input)) ? defaultValue : Number(input)