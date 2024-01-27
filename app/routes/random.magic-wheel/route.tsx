/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { RandomMagicWheelContent } from "./content";
import type { CustomRouteHandle } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_BLOCKS } from "~/data";
import { RANDOM_MAGIC_WHEEL } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId = "random-magic-wheel";

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(RANDOM_BLOCKS, layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={RANDOM_MAGIC_WHEEL.to}>{RANDOM_MAGIC_WHEEL.title}</Link>,
};

export default function RandomMagicWheelRoute() {
	return (
		<RandomMagicWheelContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
