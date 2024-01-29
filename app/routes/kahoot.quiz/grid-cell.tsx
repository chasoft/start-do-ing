/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT_QUIZ } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function KahootQuizCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={KAHOOT_QUIZ}
		/>
	)
}