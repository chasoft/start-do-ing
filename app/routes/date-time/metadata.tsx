/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalendarTime, IconClockDown } from "@tabler/icons-react"
import { DATE_TIME_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME: Block<"date-time"> = {
	id: "date-time",
	icon: { data: IconCalendarTime, color: "#000" },
	title: "Date/Time",
	description: "Tools for date/time manipulation or counters.",
	to: "/date-time",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-red-200",
		bgLighter: "bg-red-100",
		bgDarker: "bg-red-300"
	},
	updates: DATE_TIME_UPDATES
}

export const DATE_TIME_COUNT_DOWN: Block<"$date-time-count-down"> = {
	id: "$date-time-count-down",
	icon: { data: IconClockDown, color: "#000" },
	title: "Count Down",
	description: "Everything counting down",
	to: "/date-time",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-red-200",
		bgLighter: "bg-red-100",
		bgDarker: "bg-red-300"
	},
	updates: DATE_TIME_UPDATES
}
