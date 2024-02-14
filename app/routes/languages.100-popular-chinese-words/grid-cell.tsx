/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata"
import { LANGUAGES } from "../languages/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function Languages100PopularChineseWordsCellIntro({
	blockIndex
}: {
	blockIndex: number
}) {
	return (
		<CellIntro
			metaData={LANGUAGES_100_POPULAR_CHINESE_WORDS}
			upTo={LANGUAGES.to}
			blockIndex={blockIndex}
		>
			.... INTRO... SETTINGS...Languages100PopularChineseWordsCell
		</CellIntro>
	)
}

export function Languages100PopularChineseWordsCell({
	className,
	blockIndex
}: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={LANGUAGES_100_POPULAR_CHINESE_WORDS}
			blockIndex={blockIndex}
		/>
	)
}
