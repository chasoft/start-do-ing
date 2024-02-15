/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconWheel } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_MAGIC_WHEEL: Block<RandomLayoutId> = {
	id: "random-magic-wheel",
	icon: { data: <IconWheel />, color: "#000" },
	title: "Magic Wheel",
	description: "Playing with friends",
	to: "/random/magic-wheel",
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
