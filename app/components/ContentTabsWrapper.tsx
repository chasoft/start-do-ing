/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { ScrollArea, Tabs } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { MarkdownString, UrlSharingData } from "~/utils/types"
import { useTabsSearchParams } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ContentTabsWrapper<T extends string>({
	title,
	defaultKey,
	tabKeys,
	tabs,
	defaultTabColor,
	helpContents,
	urlSharingData
}: {
	title?: string
	defaultKey: T
	tabKeys: Array<T>
	tabs: Array<{ key: T; label: string; color?: string; content: React.ReactNode }>
	defaultTabColor?: string
	helpContents?: MarkdownString
	urlSharingData: UrlSharingData
}) {
	const [selectedTabKey, onTabChange] = useTabsSearchParams<T>({
		keys: tabKeys,
		defaultKey
	})
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<Tabs
				color={defaultTabColor}
				className="h-full"
				value={selectedTabKey}
				onChange={onTabChange}
			>
				{Boolean(title) && (
					<h1 className="px-3 pt-2 text-lg font-semibold lg:hidden">{title}</h1>
				)}
				<Tabs.List>
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab.key}
							value={tab.key}
							color={tab.color}
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
