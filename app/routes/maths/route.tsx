/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
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
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={MATHS_BLOCKS} GridCell={MathsGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
