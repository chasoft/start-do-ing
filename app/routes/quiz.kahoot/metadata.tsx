/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, QuizLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconPlayerPlay } from "@tabler/icons-react"
import { QUIZ_KAHOOT_UPDATES } from "./updates"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const KAHOOT_QUIZ: Block<QuizLayoutId> = {
	id: "kahoot-quiz",
	icon: { data: IconPlayerPlay, color: "#000" },
	title: "Kahoot",
	description: "Play online quiz with friends",
	to: "/quiz/kahoot",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	updates: QUIZ_KAHOOT_UPDATES
}
