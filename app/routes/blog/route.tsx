/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BlogGridCells } from "./BlogGridCells";
import { ContentWrapper, NavigationGrid } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOG_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function BlogGroupRoute() {
	return (
		<NavigationGrid blocks={BLOG_BLOCKS} GridCell={BlogGridCells}>
			<ContentWrapper>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
