/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_MAGIC_WHEEL } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomMagicWheelCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_MAGIC_WHEEL} />
}
