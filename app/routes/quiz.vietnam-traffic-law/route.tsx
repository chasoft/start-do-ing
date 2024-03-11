/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { VietnamTrafficLawContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { QUIZ_BLOCKS } from "~/data"
import { VIETNAM_TRAFFIC_LAW } from "./metadata"
import "@mantine/core/styles/Combobox.css"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "vietnam-traffic-law"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(QUIZ_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={VIETNAM_TRAFFIC_LAW.to}>{VIETNAM_TRAFFIC_LAW.title}</Link>
}

export default function KahootQuizRoute() {
	return <VietnamTrafficLawContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
