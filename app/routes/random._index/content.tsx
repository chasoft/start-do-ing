/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper, LatestReleases } from "~/components"
import { randomLatestReleaseUpdates, useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM } from "../random/metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "intro"
const tabKeys: TabKey[] = ["intro"]
const defaultKey: TabKey = "intro"

function GroupIntro() {
	return (
		<section className="max-w-3xl">
			<p className="text-lg font-semibold">Random</p>
			<p>Randomize or shuffle any data, from numbers to complex objects!</p>
		</section>
	)
}

const tabs: Array<TabData<string>> = [
	{
		key: "intro",
		label: "Introduction",
		content: (
			<LatestReleases intro={<GroupIntro />} getFunc={randomLatestReleaseUpdates} />
		),
		hasScrollAreaWrapper: true
	}
]

export function RandomIndexContent() {
	const urlSharingData = useUrlSharingData(RANDOM, false)
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
