/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { CountdownNumberTab } from "./CountDownNumberTab"
import { OptionsTab } from "./OptionsTab"
import { useHelpContents, useUrlSharingData } from "~/utils"
import type { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN_NUMBER } from "./metadata"
import { helpContents } from "./helpContents"
import { IconSettings } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "number" | "options"
const tabKeys: TabKey[] = ["number", "options"]
const defaultKey: TabKey = "number"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "number",
		label: "Number",
		content: <CountdownNumberTab />
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
	const urlSharingData = useUrlSharingData(DATE_TIME_COUNT_DOWN_NUMBER)
	return (
		<ContentTabsWrapper
			title={DATE_TIME_COUNT_DOWN_NUMBER.title}
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
