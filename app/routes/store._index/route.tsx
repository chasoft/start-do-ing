/* FRAMEWORK */
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { STORE } from "../store/metadata"
import { StoreIndexContent } from "./content"
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

const layoutId = "store"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData([STORE], layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	isGroup: true
}

export default function StoreIndexRoute() {
	return <StoreIndexContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
