/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { KAHOOT_QUIZ } from "./metadata"
import { QUIZ } from "../quiz/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function KahootQuizCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={KAHOOT_QUIZ} upTo={QUIZ.to} blockIndex={blockIndex} />
}

export function KahootQuizCell({ className, blockIndex }: GridCellProps) {
	return <CellItem className={className} metaData={KAHOOT_QUIZ} blockIndex={blockIndex} />
}
