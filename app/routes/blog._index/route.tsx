/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BLOG } from "../blog/metadata"
import { BlogIndexContent } from "./content"
import { ErrorBoundaryBase } from "~/components"
import { getBlockMetaData } from "~/utils"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "blog"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData([BLOG], layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	isGroup: true
}

export default function BlogIndexRoute() {
	return <BlogIndexContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
