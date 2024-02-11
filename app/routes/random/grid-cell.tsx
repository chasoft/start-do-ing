/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM } from "./metadata"
import { RANDOM_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(RANDOM_BLOCKS)

export function RandomGroupCellIntro() {
	return (
		<CellIntro metaData={RANDOM} upTo={RANDOM.to}>
			.... INTRO... SETTINGS...RandomGroupCell
		</CellIntro>
	)
}

export function RandomGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={RANDOM}
		/>
	)
}
