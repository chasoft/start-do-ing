/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, OthersLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const OTHERS_RUNNING_TEXT: Block<OthersLayoutId> = {
	id: "others-running-text",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Running Text",
	description: "",
	to: "/others/running-text",
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
