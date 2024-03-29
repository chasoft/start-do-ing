/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalendarMonth } from "@tabler/icons-react"
import { DATE_TIME_CALENDAR_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_CALENDAR: Block<DateTimeLayoutId> = {
	id: "date-time-calendar",
	icon: { data: IconCalendarMonth, color: "#000" },
	title: "Calendar",
	description: "Lunar date and public events",
	to: "/date-time/calendar",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_CALENDAR_UPDATES
}
