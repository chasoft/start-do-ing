/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { UrlShortenerGridCells } from "./UrlShortenerGridCells"
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function UrlShortenerRoute() {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<Outlet />
			</FullScreenContentWrapper>
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
			<Outlet />
		</NavigationGrid>
	)
}
