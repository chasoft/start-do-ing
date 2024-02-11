/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS } from "./metadata"
import { MATHS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(MATHS_BLOCKS)

export function MathsGroupCellIntro() {
	return (
		<CellIntro metaData={MATHS} upTo={MATHS.to}>
			.... INTRO... SETTINGS...MathsGroupCell
		</CellIntro>
	)
}

export function MathsGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={MATHS}
		/>
	)
}
