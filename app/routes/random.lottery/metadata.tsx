/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMoodHappy } from "@tabler/icons-react"
import { RANDOM_LOTTERY_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_LOTTERY: Block<RandomLayoutId> = {
	id: "random-lottery",
	icon: { data: IconMoodHappy, color: "#000" },
	title: "Lottery Generator",
	description: "Find your lucky numbers",
	to: "/random/lottery",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: RANDOM_LOTTERY_UPDATES
}
