/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "./metadata"
import { URL_SHORTENER_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(URL_SHORTENER_BLOCKS)

export function UrlShortenerGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={URL_SHORTENER}
		/>
	)
}
