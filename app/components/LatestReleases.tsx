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
		<>
			<p className="mb-2">{`Last ${LIMIT_LATEST_RELEASE_DATES} latest release dates:`}</p>
			<ReleaseTimeline releases={releases} />
		</>
	)
}
