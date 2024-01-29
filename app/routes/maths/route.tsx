/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils";
import { MathsGridCells } from "./MathsGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS } from "./metadata";
import { MATHS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function MathsGroupRoute() {
	const urlSharingData = getUrlSharingData(MATHS)
	return (
		<NavigationGrid blocks={MATHS_BLOCKS} GridCell={MathsGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
