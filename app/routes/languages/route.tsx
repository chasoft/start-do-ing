/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { LanguagesGridCells } from "./LanguagesGridCells"
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function LanguagesGroupRoute() {
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
		<NavigationGrid blocks={LANGUAGES_BLOCKS} GridCell={LanguagesGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
