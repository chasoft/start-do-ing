/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { DateTimeGridCells } from "./DateTimeGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DateTimeGroupRoute() {
	return (
		<NavigationGrid blocks={DATE_TIME_BLOCKS} GridCell={DateTimeGridCells}>
			<ContentWrapper>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
