/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { AboutFeature } from "./content";
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData, useIsFullscreen } from "~/utils";
import { FullScreenContentWrapper, NavigationGrid } from "~/components";
import { RootGridCells } from "~/components/RootGridCells";
import type { CustomRouteHandle } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId = "about"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(HOME_BLOCKS, layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId: layoutId
};

export default function AboutRoute() {
	const isFullScreen = useIsFullscreen()

	if (isFullScreen) {
		return (
			<FullScreenContentWrapper>
				<AboutFeature layoutId={layoutId} />
			</FullScreenContentWrapper>
		)
	}

	return (
		<NavigationGrid blocks={HOME_BLOCKS} GridCell={RootGridCells}>
			<AboutFeature layoutId={layoutId} />
		</NavigationGrid>
	);
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
