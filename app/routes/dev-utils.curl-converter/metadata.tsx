/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_CURL_CONVERTER: Block<DevUtilsLayoutId> = {
	id: "dev-utils-curl-converter",
	icon: { data: <IconAlertTriangle />, color: "#000" },
	title: "cURL Converter",
	description: "cURL commands to code",
	to: "/dev-utils/curl-converter",
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
