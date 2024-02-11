/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DASHBOARD_SETTINGS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DashboardSettingsCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DASHBOARD_SETTINGS} />
}
