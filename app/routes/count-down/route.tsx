/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CountDownFeature } from "./content";
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "count-down"

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

export default function CountDownRoute() {
	return (
		<>
			<CountDownFeature layoutId={layoutId} />
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
