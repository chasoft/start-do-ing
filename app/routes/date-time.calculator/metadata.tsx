/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCalculator } from "@tabler/icons-react"

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
	updates: [
		{
			date: new Date(2024, 1, 1).getTime(),
			codeName: "calculator-1",
			description: "update feature",
			version: "1.0.0"
		},
		{
			date: new Date(2024, 0, 15).getTime(),
			codeName: "calculator-2",
			description: "fix bug",
			version: "1.0.1"
		},
		{
			date: new Date(2024, 0, 15).getTime(),
			codeName: "calculator-3",
			description: `
Fix **bug 2** ~Fix bug~ 2 Fix bug  Fix bug 2 Fix bug 2 Fix bug 2
 * Fix bug 2
 * Fix bug 2 Fix bug 2"
`,
			version: "1.0.2"
		},
		{
			date: new Date(2025, 0, 15).getTime(),
			codeName: "calculator-2",
			description: "fix bug",
			version: "1.0.3"
		}
	]
}
