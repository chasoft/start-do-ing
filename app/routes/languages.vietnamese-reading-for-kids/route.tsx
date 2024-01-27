/* FRAMEWORK */
import { Link } from "@remix-run/react";
import { type MetaFunction } from "@remix-run/cloudflare";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { getBlockMetaData } from "~/utils";
import { LanguagesVietnameseReadingForKidsContent } from "./content";
import type { CustomRouteHandle } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_BLOCKS } from "~/data";
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const layoutId = "vietnamese-reading-for-kids"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(LANGUAGES_BLOCKS, layoutId);
	return [
		{ title },
		{ name: "description", content: description },
	];
};

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={LANGUAGES_VIETNAMESE_READING_FOR_KIDS.to}>{LANGUAGES_VIETNAMESE_READING_FOR_KIDS.title}</Link>,
};

export default function VietnameseReadingForKidsRoute() {
	return (
		<LanguagesVietnameseReadingForKidsContent layoutId={layoutId} />
	)
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
