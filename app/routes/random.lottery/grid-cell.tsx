/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_LOTTERY } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomLotteryCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_LOTTERY} />
}
