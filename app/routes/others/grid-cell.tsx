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

export function OthersGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={OTHERS} upTo={OTHERS.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...OthersGroupCell
		</CellIntro>
	)
}

export function OthersGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			blockIndex={blockIndex}
			metaData={OTHERS}
		/>
	)
}
