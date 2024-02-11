/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_SQL_FORMATTER } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsSqlFormatterCellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_SQL_FORMATTER} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsSqlFormatterCell
		</CellIntro>
	)
}

export function DevUtilsSqlFormatterCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_SQL_FORMATTER} />
}
