/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BlogGridCells } from "./BlogGridCells";
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOG_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function BlogGroupRoute() {
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={BLOG_BLOCKS} GridCell={BlogGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
