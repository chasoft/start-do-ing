/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils";
import { RandomGridCells } from "./RandomGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM } from "./metadata";
import { RANDOM_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function RandomGroupRoute() {
	const urlSharingData = getUrlSharingData(RANDOM)
	return (
		<NavigationGrid blocks={RANDOM_BLOCKS} GridCell={RandomGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
