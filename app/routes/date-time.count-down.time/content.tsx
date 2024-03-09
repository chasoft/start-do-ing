/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { CountdownTimeTab } from "./CountDownTimeTab"
import { OptionsTab } from "./OptionsTab"
import { useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN_TIME } from "./metadata"
import { helpContents } from "./helpContents"
import { IconSettings } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "time" | "options"
const tabKeys: TabKey[] = ["time", "options"]
const defaultKey: TabKey = "time"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "time",
		label: "Time",
		content: <CountdownTimeTab />
	},
	{
		key: "options",
		label: "Options",
		icon: <IconSettings className="inline text-slate-700" />,
		hasScrollAreaWrapper: true,
		content: <OptionsTab />
	}
]

export function DateTimeCountDownContent() {
	useHelpContents(helpContents)
	const urlSharingData = useUrlSharingData(DATE_TIME_COUNT_DOWN_TIME)
	return (
		<ContentTabsWrapper
			title={DATE_TIME_COUNT_DOWN_TIME.title}
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
