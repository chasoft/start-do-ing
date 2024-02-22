/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { RandomByGroupsContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_BLOCKS } from "~/data"
import { RANDOM_BY_GROUPS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "random-by-groups"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(RANDOM_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={RANDOM_BY_GROUPS.to}>{RANDOM_BY_GROUPS.title}</Link>
}

export default function RandomByGroupsRoute() {
	return <RandomByGroupsContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
