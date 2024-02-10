/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_LOREM_IPSUM_GENERATOR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsLoremIpsumGeneratorCell({
	className,
	blockIndex
}: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DEV_UTILS_LOREM_IPSUM_GENERATOR}
		/>
	)
}
