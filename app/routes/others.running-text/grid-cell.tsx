/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS_RUNNING_TEXT } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersRunningTextCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={OTHERS_RUNNING_TEXT}
		/>
	)
}
