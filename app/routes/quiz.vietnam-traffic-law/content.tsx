/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { LearnTab } from "./LearnTab"
import { OverviewTab } from "./OverviewTab"
import { TestTab } from "./TestTab"
import { useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { helpContents } from "./helpContents"
import { IconBook, IconCar } from "@tabler/icons-react"
import { VIETNAM_TRAFFIC_LAW } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "overview" | "learn" | "test"
const tabKeys: TabKey[] = ["overview", "learn", "test"]
const defaultKey: TabKey = "overview"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "overview",
		label: "Overview",
		hasScrollAreaWrapper: true,
		content: <OverviewTab />
	},
	{
		key: "learn",
		label: "Learn",
		icon: <IconBook className="inline text-slate-700" />,
		hasScrollAreaWrapper: true,
		content: <LearnTab />
	},
	{
		key: "test",
		label: "Test",
		icon: <IconCar className="inline text-slate-700" />,
		hasScrollAreaWrapper: true,
		content: <TestTab />
	}
]

export function VietnamTrafficLawContent() {
	useHelpContents(helpContents)
	const urlSharingData = useUrlSharingData(VIETNAM_TRAFFIC_LAW)
	return (
		<ContentTabsWrapper
			title={VIETNAM_TRAFFIC_LAW.title}
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
