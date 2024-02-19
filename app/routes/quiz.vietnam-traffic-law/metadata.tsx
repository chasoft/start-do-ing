/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, QuizLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconCar } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const VIETNAM_TRAFFIC_LAW: Block<QuizLayoutId> = {
	id: "vietnam-traffic-law",
	icon: { data: IconCar, color: "#000" },
	title: "Vietname Traffic Law",
	description: "Explore the Vietnam Traffic Law",
	to: "/quiz/vietnam-traffic-law",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: []
}
