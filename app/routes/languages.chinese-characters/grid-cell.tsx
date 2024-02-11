/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_CHINESE_CHARACTERS } from "./metadata"
import { LANGUAGES } from "../languages/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesChineseCharactersCellIntro() {
	return (
		<CellIntro metaData={LANGUAGES_CHINESE_CHARACTERS} upTo={LANGUAGES.to}>
			.... INTRO... SETTINGS...LanguagesChineseCharactersCell
		</CellIntro>
	)
}

export function LanguagesChineseCharactersCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={LANGUAGES_CHINESE_CHARACTERS} />
}
