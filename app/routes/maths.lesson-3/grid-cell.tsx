/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_3 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty3CellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={MATHS_3} upTo={MATHS.to} blockIndex={blockIndex} />
}

export function MathsEmpty3Cell({ className, blockIndex }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_3} blockIndex={blockIndex} />
}
