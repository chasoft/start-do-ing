/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_DIGITAL_CLOCK } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeDigitalClockCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DATE_TIME_DIGITAL_CLOCK}
		/>
	)
}