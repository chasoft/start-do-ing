/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterC } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_CURL_CONVERTER: Block<DevUtilsLayoutId> = {
	id: "dev-utils-curl-converter",
	icon: { data: <IconLetterC />, color: "#000" },
	title: "cURL Converter",
	description: "cURL commands to code",
	to: "/dev-utils/curl-converter",
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
