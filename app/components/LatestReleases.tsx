/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { ReleaseTimeline } from "."
import { useIsFullPage } from "~/utils"
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
	const isFullpage = useIsFullPage()
	return (
		<div className={clsx({ "flex justify-center": isFullpage })}>
			<div className="flex flex-col gap-4">
				{intro}
				<section className="flex max-w-3xl flex-col gap-2">
					<p className="font-semibold">{`Latest releases`}</p>
					<ReleaseTimeline releases={releases} />
				</section>
			</div>
		</div>
	)
}
