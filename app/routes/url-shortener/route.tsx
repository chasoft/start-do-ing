/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { useIsFullscreen, useIsMobileWindowSize, useUrlSharingData } from "~/utils"
import { UrlShortenerGridCells } from "./UrlShortenerGridCells"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "./metadata"
import { URL_SHORTENER_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function UrlShortenerRoute() {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()
	const urlSharingData = useUrlSharingData(URL_SHORTENER)

	if (isFullScreen) {
		return (
			<ContentWrapper urlSharingData={urlSharingData}>
				<Outlet />
			</ContentWrapper>
		)
	}

	if (isMobileWindowSize) {
		return (
			<NavigationMobile>
				<Outlet />
			</NavigationMobile>
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
