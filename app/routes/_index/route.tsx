/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { type MetaFunction } from "@remix-run/cloudflare";

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase, FullScreenContentWrapper, NavigationGrid } from "~/components";
import { getBlockMetaData, useIsFullscreen, useIsMobileWindowSize } from "~/utils";
import { HomeFeature } from "./content";
import { RootGridCells } from "~/components/RootGridCells";
import type { CustomRouteHandle } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME_BLOCKS } from "~/data";
import { NavigationMobile } from "~/components/NavigationMobile";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId = "home"

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

export default function HomeRoute() {
  const isFullScreen = useIsFullscreen()
  const isMobileWindowSize = useIsMobileWindowSize();

  if (isFullScreen) {
    return (
      <FullScreenContentWrapper>
        <HomeFeature layoutId={layoutId} />
      </FullScreenContentWrapper>
    )
  }

  if (isMobileWindowSize) {
    return (
      <NavigationMobile>
        <HomeFeature layoutId={layoutId} />
      </NavigationMobile>
    )
  }

  return (
    <NavigationGrid blocks={HOME_BLOCKS} GridCell={RootGridCells}>
      <HomeFeature layoutId={layoutId} />
    </NavigationGrid>
  );
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
