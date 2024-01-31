/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { DevUtilsGridCells } from "./DevUtilsGridCells";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DevUtilsGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

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
