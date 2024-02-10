/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function Languages100PopularChineseWordsCell({
	className,
	blockIndex
}: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={LANGUAGES_100_POPULAR_CHINESE_WORDS}
		/>
	)
}
