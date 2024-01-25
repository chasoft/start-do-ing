/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { DateTimeCalculatorContent } from "./content";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_CALCULATOR } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "date-time-calculator";

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={DATE_TIME_CALCULATOR.to}>{DATE_TIME_CALCULATOR.title}</Link>,
};

export default function DateTimeCalculatorRoute() {
	return (
		<DateTimeCalculatorContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
