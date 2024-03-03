/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"
import { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { helpContents } from "./helpContents"
import { IconSettings } from "@tabler/icons-react"
import { RANDOM_NUMBER } from "./metadata"
import { DisplayTab } from "./display"
import { OptionsTab } from "./options"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabKey = "focus" | "full" | "options"
const tabKeys: TabKey[] = ["focus", "full", "options"]
const defaultKey: TabKey = "focus"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "focus",
		label: "Focus",
		content: <DisplayTab view="focus" />
	},
	{
		key: "full",
		label: "Full",
		content: <DisplayTab />
	},
	{
		key: "options",
		label: "Options",
		icon: <IconSettings className="inline text-slate-700" />,
		content: <OptionsTab />
	}
]

export function RandomNumberContent() {
	useHelpContents(helpContents)
	const urlSharingData = useUrlSharingData(RANDOM_NUMBER)
	return (
		<ContentTabsWrapper
			title={RANDOM_NUMBER.title}
			defaultKey={defaultKey}
			tabs={tabs}
			tabKeys={tabKeys}
			helpContents={helpContents}
			urlSharingData={urlSharingData}
		/>
	)
}
