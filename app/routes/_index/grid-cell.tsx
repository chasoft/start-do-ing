/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellGroup, CellIntro } from "~/components"
import { getMenuItemsFromBlocks } from "~/utils"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "./metadata"
import { HOME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(HOME_BLOCKS)

export function HomeGridCellIntro({ className }: { className?: string }) {
	return (
		<CellIntro metaData={HOME} upTo={HOME.to} className={className}>
			Hello welcome to my website
		</CellIntro>
	)
}

export function HomeGridCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={HOME}
		/>
	)
}
