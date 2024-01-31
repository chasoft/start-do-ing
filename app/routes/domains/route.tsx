/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { DomainsGridCells } from "./DomainsGridCells";
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DomainsGroupRoute() {
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={DOMAINS_BLOCKS} GridCell={DomainsGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
