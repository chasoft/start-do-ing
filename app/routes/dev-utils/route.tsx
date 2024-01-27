/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
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
	return (
		<NavigationGrid blocks={DEV_UTILS_BLOCKS} GridCell={DevUtilsGridCells}>
			<ContentWrapper>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
