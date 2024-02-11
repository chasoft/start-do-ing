/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_USERNAME } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomUsernameCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_USERNAME} />
}
