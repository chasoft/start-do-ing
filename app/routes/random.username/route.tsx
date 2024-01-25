/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { RandomUsernameContent } from "./content";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_USERNAME } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "random-username"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={RANDOM_USERNAME.to}>{RANDOM_USERNAME.title}</Link>,
};

export default function RandomUsernameRoute() {
	return (
		<RandomUsernameContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
