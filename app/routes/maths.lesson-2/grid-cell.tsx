/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_2 } from "./metadata"
import { MATHS } from "../maths/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty2CellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={MATHS_2} upTo={MATHS.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...MathsEmpty2Cell
		</CellIntro>
	)
}

export function MathsEmpty2Cell({ className, blockIndex }: GridCellProps) {
	return <CellItem className={className} metaData={MATHS_2} blockIndex={blockIndex} />
}
