/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLast,
	CellGridLeft,
	CellGridRight,
	CellIntroSwitcher
} from "~/components"
import { KahootQuizCell, KahootQuizCellIntro } from "../quiz.kahoot/grid-cell"
import { QuizGroupCell, QuizGroupCellIntro } from "./grid-cell"
import {
	VietnamTrafficLawCell,
	VietnamTrafficLawCellIntro
} from "../quiz.vietnam-traffic-law/grid-cell"
import type { GridCellsProps, QuizLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function QuizGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<QuizLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "quiz":
			return (
				<CellIntroSwitcher
					contentBlock={<QuizGroupCell blockIndex={blockIndex} />}
					introBlock={<QuizGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "kahoot-quiz":
			return (
				<CellIntroSwitcher
					contentBlock={<KahootQuizCell blockIndex={blockIndex} />}
					introBlock={<KahootQuizCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "vietnam-traffic-law":
			return (
				<CellIntroSwitcher
					contentBlock={<VietnamTrafficLawCell blockIndex={blockIndex} />}
					introBlock={<VietnamTrafficLawCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case EMPTY_LAYOUT_ID:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
		/**********************************************************************
		 *
		 *  FEATURED BLOCKS
		 *
		 *********************************************************************/
		case "left":
			return (
				<div className={clsx(className)}>
					<CellGridLeft />
				</div>
			)
		case "right":
			return (
				<div className={clsx(className)}>
					<CellGridRight />
				</div>
			)
		case "last":
			return (
				<div className={clsx(className)}>
					<CellGridLast blocks={lastGridCellBlocks} blockIndex={blockIndex} />
				</div>
			)
		/**********************************************************************
		 *
		 *  FIX BLOCKS
		 *
		 *********************************************************************/
		default:
			return (
				<div className={clsx(className, "h-full")}>
					<div className={clsx("h-full rounded-lg bg-gray-200")}>
						<div className="grid h-full place-content-center text-lg text-red-900 md:text-xl">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</div>
				</div>
			)
	}
}
