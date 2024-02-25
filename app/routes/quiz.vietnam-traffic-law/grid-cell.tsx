/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { QUIZ } from "../quiz/metadata"
import { VIETNAM_TRAFFIC_LAW } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function VietnamTrafficLawCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={VIETNAM_TRAFFIC_LAW} upTo={QUIZ.to} blockIndex={blockIndex} />
	)
}

export function VietnamTrafficLawCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={VIETNAM_TRAFFIC_LAW}
			blockIndex={blockIndex}
		/>
	)
}
