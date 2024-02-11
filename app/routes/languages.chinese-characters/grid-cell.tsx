/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_CHINESE_CHARACTERS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesChineseCharactersCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={LANGUAGES_CHINESE_CHARACTERS} />
}
