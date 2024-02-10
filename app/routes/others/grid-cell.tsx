/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup } from "~/components"
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

export function OthersGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={OTHERS}
		/>
	)
}
