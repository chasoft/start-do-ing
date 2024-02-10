/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN: Block<DateTimeLayoutId> = {
	id: "date-time-count-down",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Date/Time Count Down",
	description: "Everything counting down",
	to: "/date-time/count-down",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		primaryBg: "bg-rose-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
