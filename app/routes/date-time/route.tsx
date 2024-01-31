/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
import { DateTimeGridCells } from "./DateTimeGridCells";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DateTimeGroupRoute() {
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={DATE_TIME_BLOCKS} GridCell={DateTimeGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
