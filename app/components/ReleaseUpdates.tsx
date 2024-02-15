/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Tabs, Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getRelativeDateString } from "~/utils"
import { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { allReleases } from "~/data"
import { IconCheck } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ReleaseTimeline({ releases }: { releases: Array<ReleaseWithMetadata> }) {
	return (
		<ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
			{releases.map((release, idx) => (
				<li key={idx}>
					<div className="timeline-middle">
						<IconCheck />
					</div>
					<div className="timeline-end mb-5">
						<time className="font-mono italic">{release.date}</time>
						<div className="text-lg font-semibold">
							{release.icon && release.icon.data} {release.title}
						</div>
						<Text>{release.description}</Text>
					</div>
					<hr />
				</li>
			))}
		</ul>
	)
}

const releaseTabs = [
	{
		groupBy: "month",
		queryStr: "this-month",
		title: "This month"
	},
	{
		groupBy: "month",
		queryStr: "last-month",
		title: "Last month"
	},
	{
		title: "This year",
		queryStr: "this-year",
		groupBy: "year"
	}
] as const

export function ReleaseUpdates({ className }: { className?: string }) {
	return (
		<div className={clsx("h-full", className)}>
			<h1 className="text-xl mb-2 font-semibold lg:text-2xl lg:mb-4">Release updates</h1>
			<Tabs color="teal" defaultValue={releaseTabs[0].queryStr}>
				<Tabs.List>
					{releaseTabs.map((releaseTab) => (
						<Tabs.Tab key={releaseTab.queryStr} value={releaseTab.queryStr}>
							{releaseTab.title}
						</Tabs.Tab>
					))}
				</Tabs.List>

				{releaseTabs.map((releaseTab) => (
					<Tabs.Panel key={releaseTab.queryStr} value={releaseTab.queryStr} pt="xs">
						<ReleaseTimeline
							releases={
								allReleases[releaseTab.groupBy][
									getRelativeDateString(releaseTab.queryStr)
								]
							}
						/>
					</Tabs.Panel>
				))}
			</Tabs>
		</div>
	)
}
