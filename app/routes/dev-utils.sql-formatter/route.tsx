/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DevUtilsSqlFormatterContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data"
import { DEV_UTILS_SQL_FORMATTER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "dev-utils-sql-formatter"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DEV_UTILS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DEV_UTILS_SQL_FORMATTER.to}>{DEV_UTILS_SQL_FORMATTER.title}</Link>
	)
}

export default function DevUtilsSqlFormatterRoute() {
	return <DevUtilsSqlFormatterContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
