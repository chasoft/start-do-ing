/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconClockDown } from "@tabler/icons-react"
import { DATE_TIME_COUNT_DOWN_TIME_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN_TIME: Block<DateTimeLayoutId> = {
	id: "$date-time-count-down|time",
	icon: { data: IconClockDown, color: "#000" },
	title: "Time Count Down",
	description: "Simple but useful time count down",
	to: "/date-time/count-down/time",
	isSubLayout: true,
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_COUNT_DOWN_TIME_UPDATES
}
