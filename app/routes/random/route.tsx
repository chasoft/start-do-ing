/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
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
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={RANDOM_BLOCKS} GridCell={RandomGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
