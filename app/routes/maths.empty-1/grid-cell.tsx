/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_EMPTY_1 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty1CellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={MATHS_EMPTY_1} upTo={MATHS.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...MathsEmpty1Cell
		</CellIntro>
	)
}

export function MathsEmpty1Cell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={MATHS_EMPTY_1} blockIndex={blockIndex} />
	)
}
