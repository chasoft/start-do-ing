/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalendarTime } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME: Block<"date-time"> = {
	id: "date-time",
	icon: { data: IconCalendarTime, color: "#000" },
	title: "Date/Time",
	description: "Tools for date/time manipulation",
	to: "/date-time",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		bgNormal: "bg-red-200",
		bgLighter: "bg-red-100",
		bgDarker: "bg-red-300"
	},
	updates: []
}
