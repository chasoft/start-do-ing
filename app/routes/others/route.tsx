/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils";
import { OthersGridCells } from "./OthersGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { OTHERS } from "./metadata";
import { OTHERS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function OthersGroupRoute() {
	const urlSharingData = getUrlSharingData(OTHERS)
	return (
		<NavigationGrid blocks={OTHERS_BLOCKS} GridCell={OthersGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
