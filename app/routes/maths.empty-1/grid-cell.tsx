/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS_EMPTY_1 } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MathsEmpty1Cell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={MATHS_EMPTY_1}
		/>
	)
}