/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesVietnameseReadingForKidsCell({ className }: GridCellProps) {
	return (
		<CellItem className={className} metaData={LANGUAGES_VIETNAMESE_READING_FOR_KIDS} />
	)
}
