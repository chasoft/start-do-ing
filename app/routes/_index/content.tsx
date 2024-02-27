/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import {
	ContentTabsWrapper,
	HottestBlocks,
	LatestReleases,
	ReleasesHeatMap
} from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"

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
const defaultKey: TabKey = "hottest"

const tabs: Array<{
	key: string
	label: string
	color?: string
	content: React.ReactNode
}> = [
	{
		key: "hottest",
		label: "Hottest",
		content: <HottestBlocks />
	},
	{
		key: "latest",
		label: "Latest",
		content: <LatestReleases />
	},
	{
		key: "heatmap",
		label: "Heatmap",
		content: <ReleasesHeatMap />
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
