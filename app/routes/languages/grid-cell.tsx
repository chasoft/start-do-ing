/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES } from "./metadata"
import { LANGUAGES_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(LANGUAGES_BLOCKS)

export function LanguagesGroupCellIntro() {
	return (
		<CellIntro metaData={LANGUAGES} upTo={LANGUAGES.to}>
			.... INTRO... SETTINGS...DateTimeAnalogClockCell
		</CellIntro>
	)
}

export function LanguagesGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={LANGUAGES}
		/>
	)
}
