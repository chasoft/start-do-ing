/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { KAHOOT } from "./metadata"
import { KAHOOT_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(KAHOOT_BLOCKS)

export function KahootGroupCellIntro() {
	return (
		<CellIntro metaData={KAHOOT} upTo={KAHOOT.to}>
			.... INTRO... SETTINGS...KahootGroupCell
		</CellIntro>
	)
}

export function KahootGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={KAHOOT}
		/>
	)
}
