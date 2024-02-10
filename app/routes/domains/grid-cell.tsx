/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS } from "./metadata"
import { DOMAINS_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(DOMAINS_BLOCKS)

export function DomainsGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DOMAINS}
		/>
	)
}
