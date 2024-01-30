/* FRAMEWORK */
import { Outlet, useSearchParams } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { DashboardGridCells } from "./DashboardGridCells";
import { NavigationGrid } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DASHBOARD_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DashboardLayoutRoute() {
	const [searchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={DASHBOARD_BLOCKS} GridCell={DashboardGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
