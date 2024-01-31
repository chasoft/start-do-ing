/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
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
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={KAHOOT_BLOCKS} GridCell={KahootGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
