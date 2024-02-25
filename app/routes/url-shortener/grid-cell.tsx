/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
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

export function UrlShortenerGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={URL_SHORTENER} upTo={URL_SHORTENER.to} blockIndex={blockIndex} />
	)
}

export function UrlShortenerGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={URL_SHORTENER}
		/>
	)
}
