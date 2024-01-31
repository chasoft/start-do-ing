/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { MathsGridCells } from "./MathsGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS_BLOCKS } from "~/data";
import { useIsFullscreen } from "~/utils";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function MathsGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={MATHS_BLOCKS} GridCell={MathsGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
