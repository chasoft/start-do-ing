/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper, LatestReleases } from "~/components"
import {
	urlShortenerLatestReleaseUpdates,
	useHelpContents,
	useUrlSharingData
} from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "../url-shortener/metadata"
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
		<section className="">
			<p className="text-lg font-semibold">URL Shortener</p>
			<p>Short URLs for actions!</p>
		</section>
	)
}

const tabs: Array<TabData<string>> = [
	{
		key: "intro",
		label: "Introduction",
		content: (
			<LatestReleases intro={<GroupIntro />} getFunc={urlShortenerLatestReleaseUpdates} />
		),
		hasScrollAreaWrapper: true
	}
]

export function URLShortenerIndexContent() {
	const urlSharingData = useUrlSharingData(URL_SHORTENER, false)
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
