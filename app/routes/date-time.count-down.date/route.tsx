/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DateTimeCountDownContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_BLOCKS } from "~/data"
import { DATE_TIME_COUNT_DOWN_DATE } from "./metadata"
import "@mantine/core/styles/ActionIcon.css"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "$date-time-count-down|date"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DATE_TIME_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DATE_TIME_COUNT_DOWN_DATE.to}>{DATE_TIME_COUNT_DOWN_DATE.title}</Link>
	)
}

export default function DateTimeCountDownRoute() {
	return <DateTimeCountDownContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
