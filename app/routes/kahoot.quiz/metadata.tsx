/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, KahootLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const KAHOOT_QUIZ: Block<KahootLayoutId> = {
	id: "kahoot-quiz",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Kahoot Quiz",
	description: "Play online quiz with friends",
	to: "/kahoot/quiz",
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
