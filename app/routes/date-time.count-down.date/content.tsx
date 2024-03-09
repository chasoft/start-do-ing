/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { CountdownDateTab } from "./CountdownDateTab"
import { OptionsTab } from "./OptionsTab"
import { useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN_DATE } from "./metadata"
import { helpContents } from "./helpContents"
import { IconSettings } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "date" | "options"
const tabKeys: TabKey[] = ["date", "options"]
const defaultKey: TabKey = "date"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "date",
		label: "Date",
		content: <CountdownDateTab />
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
	const urlSharingData = useUrlSharingData(DATE_TIME_COUNT_DOWN_DATE)
	return (
		<ContentTabsWrapper
			title={DATE_TIME_COUNT_DOWN_DATE.title}
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
