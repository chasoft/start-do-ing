/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { type MetaFunction } from "@remix-run/cloudflare";

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components";
import { getBlockMetaData } from "~/utils";
import { HomeFeature } from "./feature";
import type { CustomRouteHandle, LayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: LayoutId = "home"

export const meta: MetaFunction = () => {
  const { title, description } = getBlockMetaData(layoutId);
  return [
    { title },
    { name: "description", content: description },
  ];
};

export const handle: CustomRouteHandle = {
  layoutId: layoutId
};

export default function HomeRoute() {
  return (
    <>
      <HomeFeature layoutId={layoutId} />
    </>
  );
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
