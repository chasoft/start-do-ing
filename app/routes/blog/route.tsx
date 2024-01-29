/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BlogGridCells } from "./BlogGridCells";
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils/common";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOG } from "./metadata";
import { BLOG_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function BlogGroupRoute() {
	const urlSharingData = getUrlSharingData(BLOG)
	return (
		<NavigationGrid blocks={BLOG_BLOCKS} GridCell={BlogGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
