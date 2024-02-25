/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { ScrollArea, Tabs, Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { HottestBlocks, LatestReleases, ReleasesHeatMap } from "."

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type TabId = "hottest" | "latest" | "heatmap"

const TABS: Record<TabId, { key: string; label: string }> = {
	hottest: {
		key: "hottest",
		label: "Hottest"
	},
	latest: {
		key: "latest",
		label: "Latest"
	},
	heatmap: {
		key: "heatmap",
		label: "Heatmap"
	}
}

const DEFAULT_TAB = TABS.hottest

const TABS_CONTENT: Array<{ key: TabId; content: React.ReactNode }> = [
	{
		key: "hottest",
		content: <HottestBlocks />
	},
	{
		key: "latest",
		content: <LatestReleases />
	},
	{
		key: "heatmap",
		content: <ReleasesHeatMap />
	}
]

export function HomeTabs({ className }: { className?: string }) {
	const [searchParams, setSearchParams] = useSearchParams()
	// We force as TabId but it is not. So, we need to use `?` in `]?.key`
	const activeTab = TABS[searchParams.get(SPR.tab.key) as TabId]?.key ?? DEFAULT_TAB.key
	const onTabChange = (selectedTab: unknown) => {
		switch (selectedTab) {
			case "latest":
			case "heatmap":
				setSearchParams((prev) => {
					prev.set(SPR.tab.key, selectedTab)
					return prev
				})
				break
			default:
				setSearchParams((prev) => {
					prev.delete(SPR.tab.key)
					return prev
				})
				break
		}
	}
	return (
		<div className={clsx("h-full", className)}>
			<Tabs color="teal" className="h-full" value={activeTab} onChange={onTabChange}>
				<Tabs.List>
					{Object.values(TABS).map((tab) => (
						<Tabs.Tab key={tab.key} value={tab.key}>
							<Text size="md" fw={activeTab === tab.key ? FW.SEMI_BOLD : FW.NORMAL}>
								{tab.label}
							</Text>
						</Tabs.Tab>
					))}
				</Tabs.List>
				{/*
					The height of the Tabs.Panel should be offset with the height
					of Tabs.List. That's why we have the class `calc(100%-50px)`
				*/}
				{TABS_CONTENT.map((tab) => (
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
