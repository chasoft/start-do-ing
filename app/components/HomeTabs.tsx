/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { ScrollArea, Tabs } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { HottestBlocks, LatestReleases, ReleasesHeatMap } from "."

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { useTabsSearchParams } from "~/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const tabKeys = ["hottest", "latest", "heatmap"] as const
type TabKey = typeof tabKeys[number]
const defaultKey: TabKey = "hottest"

const tabs: Array<{ key: string; label: string, content: React.ReactNode }> = [
	{
		key: "hottest",
		label: "Hottest",
		content: <HottestBlocks />
	},
	{
		key: "latest",
		label: "Latest",
		content: <LatestReleases />
	},
	{
		key: "heatmap",
		label: "Heatmap",
		content: <ReleasesHeatMap />
	}
]

export function HomeTabs({ className }: { className?: string }) {
	const [selectedTabKey, onTabChange] = useTabsSearchParams<TabKey>({
		keys: tabKeys,
		defaultKey
	})
	return (
		<div className={clsx("h-full", className)}>
			<Tabs color="teal" className="h-full" value={selectedTabKey} onChange={onTabChange}>
				<Tabs.List>
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab.key}
							value={tab.key}
							className="py-2"
						>
							<span className={tab.key === selectedTabKey ? "font-bold" : ""}>
								{tab.label}
							</span>
						</Tabs.Tab>
					))}
				</Tabs.List>
				{/*
					The height of the Tabs.Panel should be offset with the height
					of Tabs.List. That's why we have the class `calc(100%-50px)`
				*/}
				{tabs.map((tab) => (
					<Tabs.Panel
						key={tab.key}
						pt="xs"
						className="h-[calc(100%-50px)]"
						value={tab.key}
					>
						<ScrollArea className="h-full px-4 py-2">{tab.content}</ScrollArea>
					</Tabs.Panel>
				))}
			</Tabs>
		</div>
	)
}
