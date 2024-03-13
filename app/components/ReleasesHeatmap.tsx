/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Text, Tooltip } from "@mantine/core"
import dayjs from "dayjs"
import HeatMap from "@uiw/react-heat-map"

/* COMPONENTS & UTILS */
import { allReleases } from "~/utils"
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

type HeatmapData = { date: string; count: number }

export function ReleasesHeatMap({
	getHeatmapDataFn
}: {
	getHeatmapDataFn: () => HeatmapData[]
}) {
	const [searchParams, setSearchParams] = useSearchParams()
	const dateParam = decodeURIComponent(searchParams.get(SPR.date.key) ?? "")
	const selectedDate =
		!!dateParam && dayjs(dateParam).isValid()
			? dayjs(dateParam).format(DATE_FORMAT.forHeatmap)
			: null
	const releasesOfSelectedDate: Array<[string, ReleaseWithMetadata[]]> = selectedDate
		? [[selectedDate, allReleases[selectedDate]]]
		: [["", []]]
	const heatmapData = getHeatmapDataFn()
	const width = getHeatmapWidth()
	// TODO: refactor the implementation, not using such weird refs like `[0][1]`
	const isSelectedDateHasNoReleases =
		!releasesOfSelectedDate[0][1] || releasesOfSelectedDate[0][1].length === 0
	const selectedDateForDisplay = dayjs(selectedDate).format(DATE_FORMAT.forDisplay)

	const messagesBelowHeatmap = !selectedDate
		? "To see what got released, click a highlight date block."
		: isSelectedDateHasNoReleases
			? `There is no updates for selected date: "${selectedDateForDisplay}"`
			: ""

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
						const onClick = () => {
							setSearchParams((prev) => {
								prev.delete(SPR.date.key)
								return prev
							})
						}
						return <rect {...props} onClick={onClick} />
					}
					const tooltipContent = `${dayjs(data.date).format(DATE_FORMAT.forDisplay)} (${data.count} releases)`
					const onClick = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
						const isSelected = (e.target as SVGElement).getAttribute("data-date")
						setSearchParams((prev) => {
							if (isSelected) {
								prev.set(
									SPR.date.key,
									dayjs(isSelected).format(DATE_FORMAT.forSearchParam)
								)
							} else {
								prev.delete(SPR.date.key)
							}
							return prev
						})
					}
					return (
						<Tooltip label={tooltipContent}>
							<rect {...props} onClick={onClick} />
						</Tooltip>
					)
				}}
			/>
			<div>
				{messagesBelowHeatmap || <ReleaseTimeline releases={releasesOfSelectedDate} />}
			</div>
		</>
	)
}
