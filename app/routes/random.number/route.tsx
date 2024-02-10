/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { RandomNumberContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_BLOCKS } from "~/data"
import { RANDOM_NUMBER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "random-number"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(RANDOM_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={RANDOM_NUMBER.to}>{RANDOM_NUMBER.title}</Link>
}

export default function RandomNumberRoute() {
	return <RandomNumberContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
