/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components";
import { getBlockMetaData } from "~/utils";
import { DomainsIndexContent } from "./content";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "domains"

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

export default function DomainsIndexRoute() {
	return (
		<DomainsIndexContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
