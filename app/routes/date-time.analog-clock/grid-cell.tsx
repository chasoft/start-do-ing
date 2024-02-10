/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_ANALOG_CLOCK } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeAnalogClockCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DATE_TIME_ANALOG_CLOCK}
		/>
	)
}
