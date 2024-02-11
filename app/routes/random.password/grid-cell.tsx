/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_PASSWORD } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomPasswordCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_PASSWORD} />
}
