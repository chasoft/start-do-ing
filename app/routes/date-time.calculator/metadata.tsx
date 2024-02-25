/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalculator } from "@tabler/icons-react"
import { DATE_TIME_CALCULATOR_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_CALCULATOR: Block<DateTimeLayoutId> = {
	id: "date-time-calculator",
	icon: { data: IconCalculator, color: "#000" },
	title: "Date/Time Calculator",
	description: "Calculate date and time",
	to: "/date-time/calculator",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: DATE_TIME_CALCULATOR_UPDATES
}
