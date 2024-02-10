/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_PASSWORD: Block<RandomLayoutId> = {
	id: "random-password",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "Password Generator",
	description: "Strong passwords",
	to: "/random/password",
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
