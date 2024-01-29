/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { DevUtilsGridCells } from "./DevUtilsGridCells";
import { getUrlSharingData } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEV_UTILS } from "./metadata";
import { DEV_UTILS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DevUtilsGroupRoute() {
	const urlSharingData = getUrlSharingData(DEV_UTILS)
	return (
		<NavigationGrid blocks={DEV_UTILS_BLOCKS} GridCell={DevUtilsGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
