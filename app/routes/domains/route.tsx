/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { DomainsGridCells } from "./DomainsGridCells"
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { useIsFullPage, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default function DomainsGroupRoute() {
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
		<NavigationGrid blocks={DOMAINS_BLOCKS} GridCell={DomainsGridCells}>
			<Outlet />
		</NavigationGrid>
	)
}
