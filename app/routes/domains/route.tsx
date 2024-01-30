/* FRAMEWORK */
import { Outlet, useSearchParams } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { DomainsGridCells } from "./DomainsGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DomainsGroupRoute() {
	const [searchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={DOMAINS_BLOCKS} GridCell={DomainsGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
