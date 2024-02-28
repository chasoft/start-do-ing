/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Button, NumberInput } from "@mantine/core"

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"
import { TabData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { helpContents } from "./helpContents"
import { IconSettings } from "@tabler/icons-react"
import { RANDOM_NUMBER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

function RandomNumberForm() {
	return (
		<div>
			<NumberInput variant="filled" label="Min" placeholder="Input min value" />
			<NumberInput variant="filled" label="Max" placeholder="Input max value" />
			<Button>Generate</Button>
		</div>
	)
}

type TabKey = "contents" | "options"
const tabKeys: TabKey[] = ["contents", "options"]
const defaultKey: TabKey = "contents"

const tabs: Array<TabData<TabKey>> = [
	{
		key: "contents",
		label: "Contents",
		content: <div>First Tab Content</div>
	},
	{
		key: "options",
		label: "Options",
		icon: <IconSettings className="inline text-slate-700" />,
		content: <RandomNumberForm />
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
