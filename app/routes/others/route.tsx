/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { OthersGridCells } from "./OthersGridCells"
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function OthersGroupRoute() {
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
		<NavigationGrid blocks={OTHERS_BLOCKS} GridCell={OthersGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
