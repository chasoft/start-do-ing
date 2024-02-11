/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
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

export function DomainsGroupCellIntro() {
	return (
		<CellIntro metaData={DOMAINS} upTo={DOMAINS.to}>
			.... INTRO... SETTINGS...DomainsGroupCell
		</CellIntro>
	)
}

export function DomainsGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DOMAINS}
		/>
	)
}
