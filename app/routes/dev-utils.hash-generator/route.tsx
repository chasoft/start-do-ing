/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DevUtilsHashGeneratorContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data"
import { DEV_UTILS_HASH_GENERATOR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "dev-utils-hash-generator"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DEV_UTILS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DEV_UTILS_HASH_GENERATOR.to}>{DEV_UTILS_HASH_GENERATOR.title}</Link>
	)
}

export default function DevUtilsHashGeneratorRoute() {
	return <DevUtilsHashGeneratorContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
