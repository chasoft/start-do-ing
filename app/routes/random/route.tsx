/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { RandomGridCells } from "./RandomGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function RandomGroupRoute() {
	return (
		<NavigationGrid blocks={RANDOM_BLOCKS} GridCell={RandomGridCells}>
			<ContentWrapper>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
