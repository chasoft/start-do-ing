/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components"
import { getBlockMetaData } from "~/utils"
import { URLShortenerIndexContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "url-shortener"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(URL_SHORTENER_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId
}

export default function URLShortenerIndexRoute() {
	return <URLShortenerIndexContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
