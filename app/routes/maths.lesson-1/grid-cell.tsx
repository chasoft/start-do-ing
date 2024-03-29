/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_1 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty1CellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={MATHS_1} upTo={MATHS.to} blockIndex={blockIndex} />
}

export function MathsEmpty1Cell({ className, blockIndex }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_1} blockIndex={blockIndex} />
}
