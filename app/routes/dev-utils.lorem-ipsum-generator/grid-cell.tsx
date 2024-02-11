/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_LOREM_IPSUM_GENERATOR } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsLoremIpsumGeneratorCellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_LOREM_IPSUM_GENERATOR} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsLoremIpsumGeneratorCell
		</CellIntro>
	)
}

export function DevUtilsLoremIpsumGeneratorCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_LOREM_IPSUM_GENERATOR} />
}
