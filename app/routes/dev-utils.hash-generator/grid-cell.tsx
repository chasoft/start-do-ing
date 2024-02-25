/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_HASH_GENERATOR } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsHashGeneratorCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={DEV_UTILS_HASH_GENERATOR}
			upTo={DEV_UTILS.to}
			blockIndex={blockIndex}
		/>
	)
}

export function DevUtilsHashGeneratorCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={DEV_UTILS_HASH_GENERATOR}
			blockIndex={blockIndex}
		/>
	)
}
