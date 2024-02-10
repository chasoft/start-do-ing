/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "./metadata"
import { DATE_TIME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(DATE_TIME_BLOCKS)

export function DateTimeGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DATE_TIME}
		/>
	)
}
