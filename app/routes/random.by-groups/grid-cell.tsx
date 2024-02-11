/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_BY_GROUPS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomByGroupsCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_BY_GROUPS} />
}
