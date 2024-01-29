/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function LanguagesVietnameseReadingForKidsCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={LANGUAGES_VIETNAMESE_READING_FOR_KIDS}
		/>
	)
}