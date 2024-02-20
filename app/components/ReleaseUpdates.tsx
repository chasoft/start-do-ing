/* FRAMEWORK */
import { Link, useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { ScrollArea, Tabs, Text, Tooltip } from "@mantine/core"
import clsx from "clsx"
import dayjs from "dayjs"
import HeatMap from "@uiw/react-heat-map"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import {
	allReleaseUpdates,
	allReleaseUpdatesForHeatMap,
	getIcon,
	latestReleaseUpdates
} from "~/utils"
import { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW } from "~/data"
import { IconTag } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const LIMIT_LATEST_RELEASE_DATES = 6
const DATE_FORMAT = {
	forSearchParam: "YYYY-MM-DD",
	/**
	 * Heatmap component only support format `YYYY/MM/DD`
	 * Other that that would cause the component to not work as expected.
	 * Eg: `YYYY-MM-DD` is not a valid date format.
	 */
	forHeatmap: "YYYY/MM/DD",
	forDisplay: "MMM DD, YYYY"
} as const

export function ReleaseTimeline({
	releases
}: {
	releases: Array<[string, Array<ReleaseWithMetadata>]>
}) {
	return (
		<ul className="mb-10 timeline timeline-snap-icon timeline-compact timeline-vertical lg:mb-0">
			{releases.map((release, idx) => (
				<li key={idx} className="w-full">
					<div className="timeline-middle">
						<IconTag size={18} className="mb-1 -mt-1" />
					</div>
					<div className="lg:min-w-[640px] mb-3 timeline-end">
						<time>
							<Text size="sm">{release[0]}</Text>
						</time>
						{release[1].map((releaseDetail, idx) => {
							const Icon = getIcon(releaseDetail.icon?.data)
							return (
								<div
									key={`${release[0]}-${idx}`}
									className="flex gap-1 p-2 bg-opacity-50 rounded-lg hover:bg-gray-200"
								>
									{releaseDetail.icon && (
										<span>
											<Icon size={16} className="mt-[2px]" />
										</span>
									)}
									<div>
										<Link to={releaseDetail.to} className="flex items-center gap-1">
											<Text size="sm" fw={FW.SEMI_BOLD}>
												{releaseDetail.title}
											</Text>
										</Link>
										<Markdown className="prose-sm prose prose-p:mb-0 prose-li:my-0 prose-li:pl-0 prose-ul:mt-0">
											{releaseDetail.description}
										</Markdown>
									</div>
								</div>
							)
						})}
					</div>
					<hr />
				</li>
			))}
		</ul>
	)
}

export function LatestReleases() {
	const releases = latestReleaseUpdates(LIMIT_LATEST_RELEASE_DATES)
	return (
		<>
			<Text size="md" className="mb-2">
				{`Last ${LIMIT_LATEST_RELEASE_DATES} latest release dates.`}
			</Text>
			<ReleaseTimeline releases={releases} />
		</>
	)
}

/**
 * factors will in range from 5 to 14
 * then, width will be in range from 250px to 700px
 * the heatmap will display from April to December
 */
const getHeatmapWidth = () => {
	const currentMonth = new Date().getMonth()
	const factors = currentMonth < 5 ? 5 : currentMonth + 3
	const width = factors * 50
	return `${width}px`
}

/**
 * The heatmap now support 1 year range only (12 months)
 * as soon as this project reach more than 1 year,
 * then we can implement the logic for the width.
 * Idea: we have each HeatMap for each year! 😆
 */
export function ReleasesHeatMap() {
	const [searchParams, setSearchParams] = useSearchParams()
	const dateParam = decodeURIComponent(searchParams.get("date") ?? "")
	const selectedDate =
		dateParam && dayjs(dateParam).isValid()
			? dayjs(dateParam).format(DATE_FORMAT.forHeatmap)
			: null
	const releasesOfSelectedDate: Array<[string, ReleaseWithMetadata[]]> = selectedDate
		? [[selectedDate, allReleaseUpdates[selectedDate]]]
		: [["", []]]
	const heatmapData = allReleaseUpdatesForHeatMap()
	const width = getHeatmapWidth()
	return (
		<>
			<Text size="md" className="mb-4">
				Releases heatmap for the year of Dragon 2024
			</Text>
			<HeatMap
				weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
				startDate={dayjs("2024").toDate()}
				value={heatmapData}
				style={{ width }}
				rectProps={{ rx: 3.5 }}
				rectRender={(props, data) => {
					if (!data.count) {
						return (
							<rect
								{...props}
								onClick={() => {
									setSearchParams((prev) => {
										prev.delete("date")
										return prev
									})
								}}
							/>
						)
					}
					return (
						<Tooltip
							label={`${dayjs(data.date).format(DATE_FORMAT.forDisplay)} (${data.count} releases)`}
						>
							<rect
								{...props}
								onClick={(e) => {
									const selected = (e.target as SVGElement).getAttribute("data-date")
									if (selected) {
										setSearchParams((prev) => {
											prev.set("date", dayjs(selected).format(DATE_FORMAT.forSearchParam))
											return prev
										})
									} else {
										setSearchParams((prev) => {
											prev.delete("date")
											return prev
										})
									}
								}}
							/>
						</Tooltip>
					)
				}}
			/>
			<div>
				{!selectedDate ? (
					"To see what got released, click a highlight date block."
				) : !releasesOfSelectedDate[0][1] || releasesOfSelectedDate[0][1].length === 0 ? (
					`There is no updates for selected date: "${dayjs(selectedDate).format(DATE_FORMAT.forDisplay)}"`
				) : (
					<ReleaseTimeline releases={releasesOfSelectedDate} />
				)}
			</div>
		</>
	)
}

const TABS = {
	LATEST_RELEASES: {
		key: "latest-releases",
		label: "Latest releases"
	},
	HEATMAP: {
		key: "release-heatmap",
		label: "Releases Heatmap"
	}
}

/**
 * NOTE: Due to re-rendering issue of HeatMap componenet,
 * we must use Controlled Tabs and cannot automate using `.map()`
 */
export function ReleaseUpdates({ className }: { className?: string }) {
	const [searchParams, setSearchParams] = useSearchParams()
	const activeTab =
		searchParams.get("heatmap") === "true" ? TABS.HEATMAP.key : TABS.LATEST_RELEASES.key
	const onTabChange = (activeTab: unknown) => {
		if (activeTab === TABS.LATEST_RELEASES.key) {
			setSearchParams((prev) => {
				prev.delete("heatmap")
				return prev
			})
		} else {
			setSearchParams((prev) => {
				prev.set("heatmap", "true")
				return prev
			})
		}
	}
	return (
		<div className={clsx("h-full", className)}>
			<Tabs color="teal" className="h-full" value={activeTab} onChange={onTabChange}>
				<Tabs.List>
					<Tabs.Tab value={TABS.LATEST_RELEASES.key}>
						<Text
							size="md"
							fw={activeTab === TABS.LATEST_RELEASES.key ? FW.SEMI_BOLD : FW.NORMAL}
						>
							{TABS.LATEST_RELEASES.label}
						</Text>
					</Tabs.Tab>
					<Tabs.Tab value={TABS.HEATMAP.key} color="blue">
						<Text
							size="md"
							fw={activeTab === TABS.HEATMAP.key ? FW.SEMI_BOLD : FW.NORMAL}
						>
							{TABS.HEATMAP.label}
						</Text>
					</Tabs.Tab>
				</Tabs.List>
				{/*
					The height of the Tabs.Panel should be offset with the height
					of Tabs.List. That's why we have the class `calc(100%-50px)`
				*/}
				<Tabs.Panel
					pt="xs"
					className="h-[calc(100%-50px)]"
					value={TABS.LATEST_RELEASES.key}
				>
					<ScrollArea className="h-full px-4 py-2">
						<LatestReleases />
					</ScrollArea>
				</Tabs.Panel>

				<Tabs.Panel pt="xs" className="h-[calc(100%-50px)]" value={TABS.HEATMAP.key}>
					<ScrollArea className="h-full px-4 py-2">
						<ReleasesHeatMap />
					</ScrollArea>
				</Tabs.Panel>
			</Tabs>
		</div>
	)
}
