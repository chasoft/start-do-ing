/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS } from "./metadata"
import { OTHERS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(OTHERS_BLOCKS)

export function OthersGroupCellIntro() {
	return (
		<CellIntro metaData={OTHERS} upTo={OTHERS.to}>
			.... INTRO... SETTINGS...OthersGroupCell
		</CellIntro>
	)
}

export function OthersGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={OTHERS}
		/>
	)
}
