/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterM } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_MARKDOWN_EDITOR: Block<DevUtilsLayoutId> = {
	id: "dev-utils-markdown-editor",
	icon: { data: <IconLetterM />, color: "#000" },
	title: "Markdown Editor",
	description: "Quick editor your web-browser",
	to: "/dev-utils/markdown-editor",
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
