import { getBlockMetaData } from "~/utils";
import { type MetaFunction } from "@remix-run/cloudflare";
import type { CustomRouteHandle, LayoutId } from "~/utils/types";
import { RandomIndexFeature } from "./feature";
import { ErrorBoundaryBase } from "~/components";

const layoutId: LayoutId = "random"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId
};

export default function RandomIndexRoute() {
	return (
		<RandomIndexFeature layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
