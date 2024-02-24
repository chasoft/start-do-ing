/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
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

export function DateTimeGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={DATE_TIME} upTo={DATE_TIME.to} blockIndex={blockIndex} />
}

export function DateTimeGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DATE_TIME}
		/>
	)
}
