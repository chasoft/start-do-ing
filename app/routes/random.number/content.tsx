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

const tabKeys = ["first-tab", "second-tab", "third-tab"] as const
type TabKey = typeof tabKeys[number]
const defaultKey: TabKey = "first-tab"

const tabs: Array<{ key: TabKey; label: string, content: React.ReactNode }> = [
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
						>
							<span className={tab.key === selectedTabKey ? "font-bold" : ""}>
								{tab.label}
							</span>
						</Tabs.Tab>
					))}
				</Tabs.List>

				{tabs.map((tabs) => (
					<Tabs.Panel
						key={tabs.key}
						value={tabs.key}
						className="p-2 sm:p-4 xl:p-6"
					>
						{tabs.content}
					</Tabs.Panel>
				))}
			</Tabs>
		</ContentWrapper>
	)
}
