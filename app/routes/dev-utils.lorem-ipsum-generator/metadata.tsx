/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterL } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_LOREM_IPSUM_GENERATOR: Block<DevUtilsLayoutId> = {
	id: "dev-utils-lorem-ipsum-generator",
	icon: { data: <IconLetterL />, color: "#000" },
	title: "Lorem Ipsum Generator",
	description: "Dummy text for your design",
	to: "/dev-utils/lorem-ipsum-generator",
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
