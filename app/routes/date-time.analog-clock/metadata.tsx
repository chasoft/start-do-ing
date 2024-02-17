/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconClock } from "@tabler/icons-react"
import dayjs from "dayjs"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_ANALOG_CLOCK: Block<DateTimeLayoutId> = {
	id: "date-time-analog-clock",
	icon: { data: IconClock, color: "text-gray-500" },
	title: "Analog Clock",
	description: "Just a traditional clock",
	to: "/date-time/analog-clock",
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
			date: dayjs("2024/02/16").valueOf(),
			codeName: "",
			description: "string",
			version: "1.0.0"
		}
	]
}
