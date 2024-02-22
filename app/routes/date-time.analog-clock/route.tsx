/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DateTimeAnalogClockContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_ANALOG_CLOCK } from "./metadata"
import { DATE_TIME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "date-time-analog-clock"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DATE_TIME_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DATE_TIME_ANALOG_CLOCK.to}>{DATE_TIME_ANALOG_CLOCK.title}</Link>
	)
}

export default function DateTimeAnalogClockRoute() {
	return <DateTimeAnalogClockContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
