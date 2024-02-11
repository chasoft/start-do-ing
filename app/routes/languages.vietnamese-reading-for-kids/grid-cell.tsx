/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata"
import { LANGUAGES } from "../languages/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesVietnameseReadingForKidsCellIntro() {
	return (
		<CellIntro metaData={LANGUAGES_VIETNAMESE_READING_FOR_KIDS} upTo={LANGUAGES.to}>
			.... INTRO... SETTINGS...LanguagesVietnameseReadingForKidsCell
		</CellIntro>
	)
}

export function LanguagesVietnameseReadingForKidsCell({ className }: GridCellProps) {
	return (
		<CellItem className={className} metaData={LANGUAGES_VIETNAMESE_READING_FOR_KIDS} />
	)
}
