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

export function LanguagesGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={LANGUAGES} upTo={LANGUAGES.to} blockIndex={blockIndex} />
}

export function LanguagesGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={LANGUAGES}
		/>
	)
}
