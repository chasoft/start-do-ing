/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { DomainsGridCells } from "./DomainsGridCells";
import { getUrlSharingData } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS } from "./metadata";
import { DOMAINS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function DomainsGroupRoute() {
	const urlSharingData = getUrlSharingData(DOMAINS)
	return (
		<NavigationGrid blocks={DOMAINS_BLOCKS} GridCell={DomainsGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
