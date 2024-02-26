/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { Button, NumberInput, Tabs } from "@mantine/core"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useHelpContents, useTabsSearchParams, useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_NUMBER } from "./metadata"
import { helpContents } from "./helpContents"

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

const tabs: { key: TabKey; label: string }[] = [
	{
		key: "first-tab",
		label: "First tab"
	},
	{
		key: "second-tab",
		label: "Second tab"
	},
	{
		key: "third-tab",
		label: "Third tab"
	}
]

const tabContents: { key: TabKey; content: React.ReactNode }[] = [
	{
		key: "first-tab",
		content: <div>First Tab Content</div>
	},
	{
		key: "second-tab",
		content: <RandomNumberForm />
	},
	{
		key: "third-tab",
		content: <div>3 third Content</div>
	}
]

export function RandomNumberContent() {
	const [selectedTabKey, onTabChange] = useTabsSearchParams<TabKey>({
		keys: tabKeys,
		defaultKey
	})
	const urlSharingData = useUrlSharingData(RANDOM_NUMBER)
	useHelpContents(helpContents)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<Tabs value={selectedTabKey} onChange={onTabChange}>
				<Tabs.List>
					<h1 className="px-3 py-2 text-lg font-semibold sm:text-2xl">
						{RANDOM_NUMBER.title}
					</h1>
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab.key}
							value={tab.key}
							className={tab.key === selectedTabKey ? "font-bold" : ""}
						>
							{tab.label}
						</Tabs.Tab>
					))}
				</Tabs.List>

				{tabContents.map((tabContent) => (
					<Tabs.Panel
						key={tabContent.key}
						value={tabContent.key}
						className="p-2 sm:p-4 xl:p-6"
					>
						{tabContent.content}
					</Tabs.Panel>
				))}
			</Tabs>
		</ContentWrapper>
	)
}
