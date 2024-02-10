/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { SupportFeature } from "./content"
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData, useIsFullscreen, useIsMobileWindowSize } from "~/utils"
import { FullScreenContentWrapper, NavigationGrid, NavigationMobile } from "~/components"
import { RootGridCells } from "~/components/RootGridCells"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "support"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(HOME_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId: layoutId
}

export default function SupportRoute() {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<SupportFeature layoutId={layoutId} />
			</FullScreenContentWrapper>
		)
	}

	if (isMobileWindowSize) {
		return (
			<NavigationMobile>
				<SupportFeature layoutId={layoutId} />
			</NavigationMobile>
		)
	}

	return (
		<NavigationGrid blocks={HOME_BLOCKS} GridCell={RootGridCells}>
			<SupportFeature layoutId={layoutId} />
		</NavigationGrid>
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
