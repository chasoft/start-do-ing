/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components"
import { getBlockMetaData } from "~/utils"
import { DevUtilsIndexContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "dev-utils"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DEV_UTILS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	isGroup: true
}

export default function DevUtilsIndexRoute() {
	return <DevUtilsIndexContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
