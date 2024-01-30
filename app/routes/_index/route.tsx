/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { type MetaFunction } from "@remix-run/cloudflare";

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase, NavigationGrid } from "~/components";
import { getBlockMetaData } from "~/utils";
import { HomeFeature } from "./content";
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
  const [searchParams] = useSearchParams()
  const isFullScreen = searchParams.get("full") === "true"

  if (isFullScreen) {
    return <HomeFeature layoutId={layoutId} />
  }

  return (
    <NavigationGrid blocks={HOME_BLOCKS} GridCell={RootGridCells}>
      <HomeFeature layoutId={layoutId} />
    </NavigationGrid>
  );
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
