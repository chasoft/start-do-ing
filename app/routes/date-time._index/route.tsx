/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components"
import { getBlockMetaData } from "~/utils"
import { DateTimeIndexContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "date-time"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DATE_TIME_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId
}

export default function DateTimeIndexRoute() {
	return <DateTimeIndexContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
