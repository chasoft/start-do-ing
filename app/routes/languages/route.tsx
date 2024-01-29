/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData } from "~/utils";
import { LanguagesGridCells } from "./LanguagesGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES } from "./metadata";
import { LANGUAGES_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function LanguagesGroupRoute() {
	const urlSharingData = getUrlSharingData(LANGUAGES)
	return (
		<NavigationGrid blocks={LANGUAGES_BLOCKS} GridCell={LanguagesGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
					<Outlet />
				</div>
			</ContentWrapper>
		</NavigationGrid>
	)
}
