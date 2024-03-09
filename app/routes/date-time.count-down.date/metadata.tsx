/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalendarDown } from "@tabler/icons-react"
import { DATE_TIME_COUNT_DOWN_DATE_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN_DATE: Block<DateTimeLayoutId> = {
	id: "$date-time-count-down|date",
	icon: { data: IconCalendarDown, color: "#000" },
	title: "Date Count Down",
	description: "Your important date",
	to: "/date-time/count-down/date",
	isSubLayout: true,
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_COUNT_DOWN_DATE_UPDATES
}
