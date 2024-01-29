/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEV_UTILS_SQL_FORMATTER } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DevUtilsSqlFormatterCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DEV_UTILS_SQL_FORMATTER}
		/>
	)
}