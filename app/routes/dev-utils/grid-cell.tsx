/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS } from "./metadata"
import { DEV_UTILS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(DEV_UTILS_BLOCKS)

export function DevUtilsGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={DEV_UTILS} upTo={DEV_UTILS.to} blockIndex={blockIndex} />
}

export function DevUtilsGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DEV_UTILS}
		/>
	)
}
