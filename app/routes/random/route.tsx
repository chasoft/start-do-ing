/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { RandomGridCells } from "./RandomGridCells";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function RandomGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={RANDOM_BLOCKS} GridCell={RandomGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
