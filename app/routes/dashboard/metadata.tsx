/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DashboardLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconLayoutDashboard } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DASHBOARD: Block<DashboardLayoutId> = {
	id: "dashboard",
	icon: { data: <IconLayoutDashboard />, color: "black" },
	title: "Manage",
	description: "Managing your blocks",
	to: "/dashboard",
	group: [],
	favorite: true,
	color: {
		text: "#000",
		primaryBg: "bg-green-200"
	},
	versioning: {
		releaseDate: new Date("2023/01/17"),
		major: 0,
		minor: 1
	}
}
