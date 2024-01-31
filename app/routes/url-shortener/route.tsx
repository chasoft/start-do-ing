/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid } from "~/components";
import { getUrlSharingData, useIsFullscreen } from "~/utils";
import { UrlShortenerGridCells } from "./UrlShortenerGridCells";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { URL_SHORTENER } from "./metadata";
import { URL_SHORTENER_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function UrlShortenerRoute() {
	const isFullScreen = useIsFullscreen()
	const urlSharingData = getUrlSharingData(URL_SHORTENER)

	if (isFullScreen) {
		return (
			<ContentWrapper urlSharingData={urlSharingData}>
				<Outlet />
			</ContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={URL_SHORTENER_BLOCKS} GridCell={UrlShortenerGridCells}>
			<ContentWrapper urlSharingData={urlSharingData}>
				<Outlet />
			</ContentWrapper>
		</NavigationGrid>
	)
}
