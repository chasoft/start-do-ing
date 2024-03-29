/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { MathsEmpty2Content } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_BLOCKS } from "~/data"
import { MATHS_2 } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "maths-2"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(MATHS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={MATHS_2.to}>{MATHS_2.title}</Link>
}

export default function MathsEmpty2Route() {
	return <MathsEmpty2Content />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
