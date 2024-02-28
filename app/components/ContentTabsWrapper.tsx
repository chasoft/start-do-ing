/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { ScrollArea, Tabs } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { MarkdownString, TabData, UrlSharingData } from "~/utils/types"
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
	tabs: Array<TabData<T>>
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
				{!!title && (
					<h1 className="px-3 pt-2 text-lg font-semibold sm:hidden">{title}</h1>
				)}
				<Tabs.List>
					{!!title && (
						<h1 className="hidden px-3 pt-2 text-lg font-semibold sm:block lg:hidden">
							{title}
						</h1>
					)}
					{tabs.map((tab) => (
						<Tabs.Tab
							key={tab.key}
							value={tab.key}
							color={tab.color}
							className={clsx(
								"flex gap-1 py-3",
								tab.key === selectedTabKey ? "font-bold" : ""
							)}
						>
							{tab.icon && tab.icon} {tab.label}
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
