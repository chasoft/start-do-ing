/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, OthersLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconRun } from "@tabler/icons-react"
import { OTHERS_RUNNING_TEXT_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const OTHERS_RUNNING_TEXT: Block<OthersLayoutId> = {
	id: "others-running-text",
	icon: { data: IconRun, color: "#000" },
	title: "Running Text",
	description: "Sometime you just need a simple running text",
	to: "/others/running-text",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: OTHERS_RUNNING_TEXT_UPDATES
}
