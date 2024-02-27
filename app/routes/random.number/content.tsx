/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { Button, NumberInput } from "@mantine/core"

/* COMPONENTS & UTILS */
import { ContentTabsWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { helpContents } from "./helpContents"
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

type TabKey = "first-tab" | "second-tab" | "third-tab"
const tabKeys: TabKey[] = ["first-tab", "second-tab", "third-tab"]
const defaultKey: TabKey = "first-tab"

const tabs: Array<{ key: TabKey; label: string; content: React.ReactNode }> = [
	{
		key: "first-tab",
		label: "First tab",
		content: <div>First Tab Content</div>
	},
	{
		key: "second-tab",
		label: "Second tab",
		content: <RandomNumberForm />
	},
	{
		key: "third-tab",
		label: "Third tab",
		content: <div>3 third Content</div>
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
