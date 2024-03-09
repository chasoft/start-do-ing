/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconSortDescendingNumbers } from "@tabler/icons-react"
import { DATE_TIME_COUNT_DOWN_NUMBER_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN_NUMBER: Block<DateTimeLayoutId> = {
	id: "$date-time-count-down|number",
	icon: { data: IconSortDescendingNumbers, color: "#000" },
	title: "Number Count Down",
	description: "Simple but useful number count down",
	to: "/date-time/count-down/number",
	isSubLayout: true,
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_COUNT_DOWN_NUMBER_UPDATES
}
