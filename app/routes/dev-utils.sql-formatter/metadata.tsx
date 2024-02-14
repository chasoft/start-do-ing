/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLetterS } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_SQL_FORMATTER: Block<DevUtilsLayoutId> = {
	id: "dev-utils-sql-formatter",
	icon: { data: <IconLetterS />, color: "#000" },
	title: "SQL Formatter",
	description: "Beautify your SQL queries",
	to: "/dev-utils/sql-formatter",
	group: [],
	favorite: false,
	color: {
		text: "#000",
		bgNormal: "bg-rose-200",
		bgLighter: "bg-rose-100",
		bgDarker: "bg-rose-300"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
