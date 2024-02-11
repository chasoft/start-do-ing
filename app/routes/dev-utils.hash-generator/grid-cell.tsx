/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_HASH_GENERATOR } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsHashGeneratorCellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_HASH_GENERATOR} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsHashGeneratorCell
		</CellIntro>
	)
}

export function DevUtilsHashGeneratorCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_HASH_GENERATOR} />
}
