/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { DateTimeGridCells } from "./DateTimeGridCells"
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { LAYOUT_SEPARATOR, useIsFullPage, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function DateTimeGroupRoute() {
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

	const BLOCKS = DATE_TIME_BLOCKS.filter((block) => !block.id.includes(LAYOUT_SEPARATOR))

	return (
		<NavigationGrid blocks={BLOCKS} GridCell={DateTimeGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
