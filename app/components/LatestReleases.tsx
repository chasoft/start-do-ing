/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { latestReleaseUpdates } from "~/utils"
import { ReleaseTimeline } from "."

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LIMIT_LATEST_RELEASE_DATES } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LatestReleases() {
	const releases = latestReleaseUpdates(LIMIT_LATEST_RELEASE_DATES)
	return (
		<div className="flex flex-col gap-4">
			<section className="">
				<p className="text-lg font-semibold">Welcome to Startdo.ing!</p>
				<p>
					Explore, have fun, and share the joy with your friends! Startdo.ing is a
					one-stop shop for a variety of tools and resources that can help you with your
					everyday tasks, from web development and design to language learning and math
					games.
				</p>
			</section>
			<section className="flex flex-col gap-2">
				<p className="font-semibold">{`Latest releases`}</p>
				<ReleaseTimeline releases={releases} />
			</section>
		</div>
	)
}
