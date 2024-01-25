/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { DomainsBuilderContent } from "./content";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS_BUILDER } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "domains-builder";

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={DOMAINS_BUILDER.to}>{DOMAINS_BUILDER.title}</Link>,
};

export default function DomainsBuilderRoute() {
	return (
		<DomainsBuilderContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
