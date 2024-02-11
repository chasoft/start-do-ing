/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_EMPTY_4 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty4CellIntro() {
	return (
		<CellIntro metaData={MATHS_EMPTY_4} upTo={MATHS.to}>
			.... INTRO... SETTINGS...MathsEmpty4Cell
		</CellIntro>
	)
}

export function MathsEmpty4Cell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_EMPTY_4} />
}
