/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { MathsGridCells } from "./MathsGridCells"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_BLOCKS } from "~/data"
import { useIsFullPage, useIsMobileWindowSize } from "~/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function MathsGroupRoute() {
	const isFullScreen = useIsFullPage()
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
		<NavigationGrid blocks={MATHS_BLOCKS} GridCell={MathsGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
