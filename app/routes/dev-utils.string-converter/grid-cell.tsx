/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_STRING_CONVERTER } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsStringConverterCellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_STRING_CONVERTER} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsStringConverterCell
		</CellIntro>
	)
}

export function DevUtilsStringConverterCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_STRING_CONVERTER} />
}
