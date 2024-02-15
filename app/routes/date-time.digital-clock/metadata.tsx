/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconDeviceWatch } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_DIGITAL_CLOCK: Block<DateTimeLayoutId> = {
	id: "date-time-digital-clock",
	icon: { data: <IconDeviceWatch />, color: "#000" },
	title: "Digital Clock",
	description: "Modern digital clock",
	to: "/date-time/digital-clock",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: null
}
