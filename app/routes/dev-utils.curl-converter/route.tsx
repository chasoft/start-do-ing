/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DevUtilsCurlConverterContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data"
import { DEV_UTILS_CURL_CONVERTER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "dev-utils-curl-converter"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DEV_UTILS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DEV_UTILS_CURL_CONVERTER.to}>{DEV_UTILS_CURL_CONVERTER.title}</Link>
	)
}

export default function DevUtilsCurlConverterRoute() {
	return <DevUtilsCurlConverterContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
