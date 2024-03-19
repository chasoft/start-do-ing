/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import type { TabData } from "~/utils/types"
import {
	ContentTabsWrapper,
	HottestBlocks,
	LatestReleases,
	ReleasesHeatMap
} from "~/components"
import {
	allLatestReleases,
	allReleasesForHeatMap,
	useHelpContents,
	useIsFullPage,
	useUrlSharingData
} from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "./metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "hottest" | "latest" | "heatmap"
const tabKeys: TabKey[] = ["hottest", "latest", "heatmap"]
const defaultKey: TabKey = "latest"

function GroupIntro() {
	const isFullpage = useIsFullPage()
	return (
		<section className={clsx("flex flex-col gap-2", { "max-w-3xl": isFullpage })}>
			<p className="text-lg font-semibold">Welcome to Startdo.ing!</p>
			<p className="text-base leading-8 sm:text-lg sm:leading-9">
				🔎 Explore, have fun, and 🔗 share the joy with your friends!{" "}
				<strong>Startdo.ing</strong> is a one-stop shop for a variety of 🔨 tools and
				resources that can help you with your everyday ⚒️ tasks, from 🌏 web development
				and design to 🈳 language learning and 🧮 math games.
			</p>
		</section>
	)
}

const tabs: Array<TabData<string>> = [
	{
		key: "hottest",
		label: "Hottest",
		content: <HottestBlocks />,
		disabled: true
	},
	{
		key: "latest",
		label: "Latest",
		content: <LatestReleases intro={<GroupIntro />} getFunc={allLatestReleases} />,
		hasScrollAreaWrapper: true
	},
	{
		key: "heatmap",
		label: "Heatmap",
		content: <ReleasesHeatMap getHeatmapDataFn={allReleasesForHeatMap} />,
		hasScrollAreaWrapper: true
	}
]

export function HomeFeature() {
	const urlSharingData = useUrlSharingData(HOME, false)
	useHelpContents(helpContents)
	return (
		<ContentTabsWrapper
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			defaultTabColor="teal"
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
