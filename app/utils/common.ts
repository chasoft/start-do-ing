/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import dayjs from "dayjs"
import groupByFunc from "lodash.groupby"
import reverse from "lodash.reverse"
import sortBy from "lodash.sortby"

/* COMPONENTS & UTILS */
import type { Block, PageId, ReleaseWithMetadata, TablerIconComponent } from "./types"
import type { Dictionary } from "lodash"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import {
	allBlocks,
	COLORS,
	DATE_TIME_BLOCKS,
	DEFAULT_SHARING_IMAGE,
	DEV_UTILS_BLOCKS,
	DOMAINS_BLOCKS,
	LANGUAGES_BLOCKS,
	MATHS_BLOCKS,
	OTHERS_BLOCKS,
	QUIZ_BLOCKS,
	RANDOM_BLOCKS,
	SITE,
	SPR,
	URL_SHORTENER_BLOCKS
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

export function getBlockColor(blockIndex: number) {
	const color = COLORS[Math.max(blockIndex, 0) % COLORS.length]
	return color
}

export const getIcon = (iconData?: TablerIconComponent) =>
	(iconData ?? IconBlank) as TablerIconComponent

/**************************************************************************
 *
 * UPDATE RELEASES
 *
 *************************************************************************/

/**
 * get release updates grouped by released date
 */
export function getReleaseUpdates(blocks: Array<Block<unknown>>) {
	const releases = reverse(
		sortBy(
			blocks.reduce((allUpdates, block) => {
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
			}, [] as Array<ReleaseWithMetadata>),
			["date"]
		)
	)
	return groupByFunc(releases, (release: ReleaseWithMetadata) => release.date)
}

/**
 * get heatmap data
 */
const getHeatmapData = (releases: Dictionary<ReleaseWithMetadata[]>) =>
	Object.entries(releases).map(([key, value]) => ({
		date: key,
		count: value.length
	}))

export const allReleaseUpdates = getReleaseUpdates(allBlocks)
export const dateTimeReleaseUpdates = getReleaseUpdates(DATE_TIME_BLOCKS.slice(1))
export const devUtilsReleaseUpdates = getReleaseUpdates(DEV_UTILS_BLOCKS.slice(1))
export const domainsReleaseUpdates = getReleaseUpdates(DOMAINS_BLOCKS.slice(1))
export const quizReleaseUpdates = getReleaseUpdates(QUIZ_BLOCKS.slice(1))
export const languagesReleaseUpdates = getReleaseUpdates(LANGUAGES_BLOCKS.slice(1))
export const mathsReleaseUpdates = getReleaseUpdates(MATHS_BLOCKS.slice(1))
export const randomReleaseUpdates = getReleaseUpdates(RANDOM_BLOCKS.slice(1))
export const urlShortenerReleaseUpdates = getReleaseUpdates(URL_SHORTENER_BLOCKS.slice(1))
export const othersReleaseUpdates = getReleaseUpdates(OTHERS_BLOCKS.slice(1))

export const allReleaseUpdatesForHeatMap = () => getHeatmapData(allReleaseUpdates)
export const dateTimeReleaseUpdatesForHeatMap = () =>
	getHeatmapData(dateTimeReleaseUpdates)
export const devUtilsReleaseUpdatesForHeatMap = () =>
	getHeatmapData(devUtilsReleaseUpdates)
export const domainsReleaseUpdatesForHeatMap = () => getHeatmapData(domainsReleaseUpdates)
export const quizReleaseUpdatesForHeatMap = () => getHeatmapData(quizReleaseUpdates)
export const languagesReleaseUpdatesForHeatMap = () =>
	getHeatmapData(languagesReleaseUpdates)
export const mathsReleaseUpdatesForHeatMap = () => getHeatmapData(mathsReleaseUpdates)
export const randomReleaseUpdatesForHeatMap = () => getHeatmapData(randomReleaseUpdates)
export const urlShortenerReleaseUpdatesForHeatMap = () =>
	getHeatmapData(urlShortenerReleaseUpdates)
export const othersReleaseUpdatesForHeatMap = () => getHeatmapData(othersReleaseUpdates)

/**
 * Latest release updates
 */
const UPDATES_LIMIT_VISIBLE = 30

export const allLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(allReleaseUpdates).slice(0, limit)
export const dateTimeLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(dateTimeReleaseUpdates).slice(0, limit)
export const devUtilsLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(devUtilsReleaseUpdates).slice(0, limit)
export const domainsLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(domainsReleaseUpdates).slice(0, limit)
export const quizLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(quizReleaseUpdates).slice(0, limit)
export const languagesLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(languagesReleaseUpdates).slice(0, limit)
export const mathsLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(mathsReleaseUpdates).slice(0, limit)
export const randomLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(randomReleaseUpdates).slice(0, limit)
export const urlShortenerLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(urlShortenerReleaseUpdates).slice(0, limit)
export const othersLatestReleaseUpdates = (limit: number = UPDATES_LIMIT_VISIBLE) =>
	Object.entries(othersReleaseUpdates).slice(0, limit)

/**************************************************************************
 *
 * OTHER UTILS FUNCTIONS
 *
 *************************************************************************/

export const toNumber = <T>(input: T, defaultValue: number = 0): number =>
	isNaN(Number(input)) ? defaultValue : Number(input)
