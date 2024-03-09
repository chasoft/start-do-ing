/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Text, Tooltip } from "@mantine/core"
import dayjs from "dayjs"
import HeatMap from "@uiw/react-heat-map"

/* COMPONENTS & UTILS */
import { allReleaseUpdates } from "~/utils"
import { ReleaseTimeline } from "."
import type { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_FORMAT, SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

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
export function ReleasesHeatMap({
	getFunc
}: {
	getFunc: () => { date: string; count: number }[]
}) {
	const [searchParams, setSearchParams] = useSearchParams()
	const dateParam = decodeURIComponent(searchParams.get(SPR.date.key) ?? "")
	const selectedDate =
		!!dateParam && dayjs(dateParam).isValid()
			? dayjs(dateParam).format(DATE_FORMAT.forHeatmap)
			: null
	const releasesOfSelectedDate: Array<[string, ReleaseWithMetadata[]]> = selectedDate
		? [[selectedDate, allReleaseUpdates[selectedDate]]]
		: [["", []]]
	const heatmapData = getFunc()
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
										prev.delete(SPR.date.key)
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
											prev.set(
												SPR.date.key,
												dayjs(selected).format(DATE_FORMAT.forSearchParam)
											)
											return prev
										})
									} else {
										setSearchParams((prev) => {
											prev.delete(SPR.date.key)
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
