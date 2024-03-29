/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_4 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty4CellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={MATHS_4} upTo={MATHS.to} blockIndex={blockIndex} />
}

export function MathsEmpty4Cell({ className, blockIndex }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_4} blockIndex={blockIndex} />
}
