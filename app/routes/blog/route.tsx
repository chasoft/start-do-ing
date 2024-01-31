/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BlogGridCells } from "./BlogGridCells";
import { NavigationGrid } from "~/components";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOG_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function BlogGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={BLOG_BLOCKS} GridCell={BlogGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
