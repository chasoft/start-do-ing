/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_EMPTY_4 } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty4Cell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} blockIndex={blockIndex} metaData={MATHS_EMPTY_4} />
	)
}
