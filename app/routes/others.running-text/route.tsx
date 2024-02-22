/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { OthersRunningTextContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS_BLOCKS } from "~/data"
import { OTHERS_RUNNING_TEXT } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "others-running-text"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(OTHERS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={OTHERS_RUNNING_TEXT.to}>{OTHERS_RUNNING_TEXT.title}</Link>
}

export default function OthersRunningTextRoute() {
	return <OthersRunningTextContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
