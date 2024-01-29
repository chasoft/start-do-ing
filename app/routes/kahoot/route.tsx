/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils";
import { KahootGridCells } from "./KahootGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT } from "./metadata";
import { KAHOOT_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function KahootGroupRoute() {
	const urlSharingData = getUrlSharingData(KAHOOT)
	return (
		<NavigationGrid blocks={KAHOOT_BLOCKS} GridCell={KahootGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
