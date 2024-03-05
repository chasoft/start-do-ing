/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper, LatestReleases } from "~/components"
import { dateTimeLatestReleaseUpdates, useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "../date-time/metadata"
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
			<p className="text-lg font-semibold">Date/Time</p>
			<p>Tools for date/time manipulation or counting down for everything you want!</p>
		</section>
	)
}

const tabs: Array<TabData<string>> = [
	{
		key: "intro",
		label: "Introduction",
		content: (
			<LatestReleases intro={<GroupIntro />} getFunc={dateTimeLatestReleaseUpdates} />
		),
		hasScrollAreaWrapper: true
	}
]

export function DateTimeIndexContent() {
	const urlSharingData = useUrlSharingData(DATE_TIME, false)
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
