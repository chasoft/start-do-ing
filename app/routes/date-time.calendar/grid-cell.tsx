/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_CALENDAR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCalendarCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DATE_TIME_CALENDAR}
		/>
	)
}
