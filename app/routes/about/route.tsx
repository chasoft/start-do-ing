import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { type MetaFunction } from "@remix-run/cloudflare";
import type { CustomRouteHandle, LayoutId } from "~/utils/types";
import { AboutFeature } from "./feature";

const layoutId: LayoutId = "about"

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

export default function AboutRoute() {
	return (
		<>
			<AboutFeature layoutId={layoutId} />
		</>
	);
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
