/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_EMPTY_2 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty2CellIntro() {
	return (
		<CellIntro metaData={MATHS_EMPTY_2} upTo={MATHS.to}>
			.... INTRO... SETTINGS...MathsEmpty2Cell
		</CellIntro>
	)
}

export function MathsEmpty2Cell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_EMPTY_2} />
}
