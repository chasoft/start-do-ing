/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BooksFeature } from "./content"
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

const layoutId = "books"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(HOME_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId: layoutId
}

export default function BooksRoute() {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<BooksFeature layoutId={layoutId} />
			</FullScreenContentWrapper>
		)
	}

	if (isMobileWindowSize) {
		return (
			<NavigationMobile>
				<BooksFeature layoutId={layoutId} />
			</NavigationMobile>
		)
	}

	return (
		<NavigationGrid blocks={HOME_BLOCKS} GridCell={RootGridCells}>
			<BooksFeature layoutId={layoutId} />
		</NavigationGrid>
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
