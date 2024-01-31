/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { KahootGridCells } from "./KahootGridCells";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function KahootGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={KAHOOT_BLOCKS} GridCell={KahootGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
