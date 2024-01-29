/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_PASSWORD } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomPasswordCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={RANDOM_PASSWORD}
		/>
	)
}