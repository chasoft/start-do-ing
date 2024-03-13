/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper, LatestReleases } from "~/components"
import { domainsLatestReleases, useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS } from "../domains/metadata"
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
			<p className="text-lg font-semibold">Domains</p>
			<p>Your domain assistants!</p>
		</section>
	)
}

const tabs: Array<TabData<string>> = [
	{
		key: "intro",
		label: "Introduction",
		content: <LatestReleases intro={<GroupIntro />} getFunc={domainsLatestReleases} />,
		hasScrollAreaWrapper: true
	}
]

export function DomainsIndexContent() {
	const urlSharingData = useUrlSharingData(DOMAINS, false)
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
