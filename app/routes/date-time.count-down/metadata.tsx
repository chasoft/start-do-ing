/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconClockDown } from "@tabler/icons-react"
import { DATE_TIME_COUNT_DOWN_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN: Block<DateTimeLayoutId> = {
	id: "date-time-count-down",
	icon: { data: IconClockDown, color: "#000" },
	title: "Count Down",
	description: "Everything counting down",
	to: "/date-time/count-down",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_COUNT_DOWN_UPDATES
}
