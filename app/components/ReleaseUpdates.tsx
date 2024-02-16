/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Text } from "@mantine/core"
import clsx from "clsx"
import HeatMap from "@uiw/react-heat-map"

/* COMPONENTS & UTILS */
import { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { allReleaseUpdatesForHeatMap, latestReleaseUpdates } from "~/data"
import { IconCheck } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ReleaseTimeline({
	releases
}: {
	releases: Array<[string, Array<ReleaseWithMetadata>]>
}) {
	if (!releases) {
		return <div>There is no updates!</div>
	}
	return (
		<ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
			{releases.map((release, idx) => (
				<li key={idx}>
					<div className="timeline-middle">
						<IconCheck />
					</div>
					<div className="timeline-end mb-5">
						<time className="font-mono italic">{release[0]}</time>
						{release[1].map((releaseDetail, idx) => (
							<div key={`${release[0]}-${idx}`}>
								<div className="flex items-center gap-2 text-lg font-semibold">
									{releaseDetail.icon && releaseDetail.icon.data} {releaseDetail.title}
								</div>
								<Text>{releaseDetail.description}</Text>
							</div>
						))}
					</div>
					<hr />
				</li>
			))}
		</ul>
	)
}

export function LatestReleases() {
	const releases = latestReleaseUpdates()
	return (
		<>
			<h2 className="font-semibold">Latest</h2>
			<ReleaseTimeline releases={releases} />
		</>
	)
}

export function ReleasesHeatMap() {
	const data = allReleaseUpdatesForHeatMap()
	return (
		<>
			<h2 className="font-semibold">Heatmap</h2>
			<HeatMap
				value={data}
				weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
				startDate={new Date("2024/01/01")}
			/>
		</>
	)
}

export function ReleaseUpdates({ className }: { className?: string }) {
	return (
		<div className={clsx("h-full", className)}>
			<h1 className="text-xl mb-2 font-semibold lg:text-2xl lg:mb-4">Release updates</h1>
			<LatestReleases />
			<ReleasesHeatMap />
		</div>
	)
}
