/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_BY_GROUPS } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomByGroupsCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={RANDOM_BY_GROUPS} upTo={RANDOM.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...RandomByGroupsCell
		</CellIntro>
	)
}

export function RandomByGroupsCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={RANDOM_BY_GROUPS} blockIndex={blockIndex} />
	)
}
