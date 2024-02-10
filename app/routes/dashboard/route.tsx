/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { DashboardGridCells } from "./DashboardGridCells"
import { FullScreenContentWrapper, NavigationGrid } from "~/components"
import { useIsFullscreen } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DASHBOARD_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function DashboardLayoutRoute() {
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={DASHBOARD_BLOCKS} GridCell={DashboardGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
