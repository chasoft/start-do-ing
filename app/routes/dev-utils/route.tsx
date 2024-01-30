/* FRAMEWORK */
import { Outlet, useSearchParams } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { DevUtilsGridCells } from "./DevUtilsGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DevUtilsGroupRoute() {
	const [searchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={DEV_UTILS_BLOCKS} GridCell={DevUtilsGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
