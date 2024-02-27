/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { Button, NumberInput, ScrollArea, Tabs } from "@mantine/core"
import clsx from "clsx"

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
type TabKey = (typeof tabKeys)[number]
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
	const [selectedTabKey, onTabChange] = useTabsSearchParams<TabKey>({
		keys: tabKeys,
		defaultKey
	})
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<Tabs className="h-full" value={selectedTabKey} onChange={onTabChange}>
				<h1 className="px-3 pt-2 text-lg font-semibold lg:hidden">
					{RANDOM_NUMBER.title}
				</h1>
				<Tabs.List>
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab.key}
							value={tab.key}
							className={clsx("py-4", tab.key === selectedTabKey ? "font-bold" : "")}
						>
							{tab.label}
						</Tabs.Tab>
					))}
				</Tabs.List>

				{tabs.map((tab) => (
					<Tabs.Panel
						key={tab.key}
						pt="xs"
						value={tab.key}
						className="h-[calc(100%-50px)] p-4 xl:p-6"
					>
						<ScrollArea className="h-full">{tab.content}</ScrollArea>
					</Tabs.Panel>
				))}
			</Tabs>
		</ContentWrapper>
	)
}
