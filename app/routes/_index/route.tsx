import { getBlockMetaData } from "~/utils";
import { type MetaFunction } from "@remix-run/cloudflare";
import type { CustomRouteHandle, LayoutId } from "~/utils/types";
import { ErrorBoundaryBase } from "~/components";
import { HomeFeature } from "./feature";

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
