/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "../url-shortener/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function URLShortenerIndexCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} blockIndex={blockIndex} metaData={URL_SHORTENER} />
	)
}
