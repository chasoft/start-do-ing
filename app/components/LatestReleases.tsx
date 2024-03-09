/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ReleaseTimeline } from "."
import type { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LIMIT_LATEST_RELEASE_DATES } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LatestReleases({
	intro,
	getFunc
}: {
	intro: React.ReactNode
	getFunc: (limit?: number) => [string, ReleaseWithMetadata[]][]
}) {
	const releases = getFunc(LIMIT_LATEST_RELEASE_DATES)
	return (
		<div className="flex flex-col gap-4">
			{intro}
			<section className="flex flex-col gap-2">
				<p className="font-semibold">{`Latest releases`}</p>
				<ReleaseTimeline releases={releases} />
			</section>
		</div>
	)
}
