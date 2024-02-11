/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BASE64 } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsBase64CellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_BASE64} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsBase64Cell
		</CellIntro>
	)
}

export function DevUtilsBase64Cell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_BASE64} />
}
