/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_NUMBER } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomNumberCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={RANDOM_NUMBER} upTo={RANDOM.to} blockIndex={blockIndex} />
}

export function RandomNumberCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={RANDOM_NUMBER} blockIndex={blockIndex} />
	)
}
