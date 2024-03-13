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
import { HOME_URLS } from "~/data/urls"
import { IconBlank } from "~/components/icons"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function getUrlSharingData(
	block: Block<PageId>,
	{ viewFullpage = true }: { viewFullpage: boolean }
) {
	const viewParams = viewFullpage ? `?${SPR.view.key}=${SPR.view.values.fullpage}` : ""
	const targetUrl = SITE.url + block.to + viewParams
	const sharedData = {
		layoutId: block.id,
		title: block.title,
		description: block.description,
		url: targetUrl,
		image: block.image ?? DEFAULT_SHARING_IMAGE
	}
	return sharedData
}

export function getBlockColor(blockIndex: number) {
	const color = COLORS[Math.max(blockIndex, 0) % COLORS.length]
	return color
}

/**
 * This function is used to get the icon from block's metadata
 */
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
export function getReleases(blocks: Array<Array<Block<unknown>>>) {
	// Remove first block as it is the group block (not the actual block)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const flattenBlocks = blocks.reduce((acc, [_, ...blocks]) => acc.concat(blocks), [])
	const unsortedUpdates = flattenBlocks.reduce((allUpdates, block) => {
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

	//TODO: Improve sorting algorithm
	const sortedUpdates = reverse(sortBy(unsortedUpdates, ["date"]))
	const updatesGroupedByDate = groupByFunc(sortedUpdates, (release) => release.date)
	return updatesGroupedByDate
}

/**
 * get heatmap data
 */
const getHeatmapData = (releases: Dictionary<ReleaseWithMetadata[]>) =>
	Object.entries(releases).map(([key, value]) => ({
		date: key,
		count: value.length
	}))

export const allReleases = getReleases(allBlocks)
export const dateTimeReleases = getReleases([DATE_TIME_BLOCKS])
export const devUtilsReleases = getReleases([DEV_UTILS_BLOCKS])
export const domainsReleases = getReleases([DOMAINS_BLOCKS])
export const quizReleases = getReleases([QUIZ_BLOCKS])
export const languagesReleases = getReleases([LANGUAGES_BLOCKS])
export const mathsReleases = getReleases([MATHS_BLOCKS])
export const randomReleases = getReleases([RANDOM_BLOCKS])
export const urlShortenerReleases = getReleases([URL_SHORTENER_BLOCKS])
export const othersReleases = getReleases([OTHERS_BLOCKS])

export const allReleasesForHeatMap = () => getHeatmapData(allReleases)
export const dateTimeReleasesForHeatMap = () => getHeatmapData(dateTimeReleases)
export const devUtilsReleasesForHeatMap = () => getHeatmapData(devUtilsReleases)
export const domainsReleasesForHeatMap = () => getHeatmapData(domainsReleases)
export const quizReleasesForHeatMap = () => getHeatmapData(quizReleases)
export const languagesReleasesForHeatMap = () => getHeatmapData(languagesReleases)
export const mathsReleasesForHeatMap = () => getHeatmapData(mathsReleases)
export const randomReleasesForHeatMap = () => getHeatmapData(randomReleases)
export const urlShortenerReleasesForHeatMap = () => getHeatmapData(urlShortenerReleases)
export const othersReleasesForHeatMap = () => getHeatmapData(othersReleases)

/**
 * Latest release updates
 */
const RELEASE_SHOWING_LIMIT = 30

export const allLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(allReleases).slice(0, limit)
export const dateTimeLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(dateTimeReleases).slice(0, limit)
export const devUtilsLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(devUtilsReleases).slice(0, limit)
export const domainsLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(domainsReleases).slice(0, limit)
export const quizLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(quizReleases).slice(0, limit)
export const languagesLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(languagesReleases).slice(0, limit)
export const mathsLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(mathsReleases).slice(0, limit)
export const randomLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(randomReleases).slice(0, limit)
export const urlShortenerLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(urlShortenerReleases).slice(0, limit)
export const othersLatestReleases = (limit: number = RELEASE_SHOWING_LIMIT) =>
	Object.entries(othersReleases).slice(0, limit)

/**************************************************************************
 *
 * OTHER UTILS FUNCTIONS
 *
 *************************************************************************/

export const isHomeURL = (url: string) => HOME_URLS.includes(url)

export const toNumber = <T>(input: T, defaultValue: number = 0): number =>
	isNaN(Number(input)) ? defaultValue : Number(input)
