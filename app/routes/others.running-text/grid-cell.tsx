/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS_RUNNING_TEXT } from "./metadata"
import { OTHERS } from "../others/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersRunningTextCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={OTHERS_RUNNING_TEXT} upTo={OTHERS.to} blockIndex={blockIndex} />
	)
}

export function OthersRunningTextCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={OTHERS_RUNNING_TEXT}
			blockIndex={blockIndex}
		/>
	)
}
