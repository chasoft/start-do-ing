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

export function RandomGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={RANDOM} upTo={RANDOM.to} blockIndex={blockIndex} />
}

export function RandomGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			blockIndex={blockIndex}
			metaData={RANDOM}
		/>
	)
}
