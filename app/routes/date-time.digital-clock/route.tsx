/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { DateTimeDigitalClockContent } from "./content";
import type { CustomRouteHandle, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_DIGITAL_CLOCK } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId: PageId = "date-time-digital-clock";

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={DATE_TIME_DIGITAL_CLOCK.to}>{DATE_TIME_DIGITAL_CLOCK.title}</Link>,
};

export default function DateTimeDigitalClockRoute() {
	return (
		<DateTimeDigitalClockContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
