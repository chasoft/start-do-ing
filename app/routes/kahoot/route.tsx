/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { KahootGridCells } from "./KahootGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function KahootGroupRoute() {
	return (
		<NavigationGrid blocks={KAHOOT_BLOCKS} GridCell={KahootGridCells}>
			<ContentWrapper>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
