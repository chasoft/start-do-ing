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
import { OthersGroupCell, OthersGroupCellIntro } from "./grid-cell"
import {
	OthersRunningTextCell,
	OthersRunningTextCellIntro
} from "../others.running-text/grid-cell"
import type { GridCellsProps, OthersLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<OthersLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "others":
			return (
				<CellIntroSwitcher
					contentBlock={<OthersGroupCell blockIndex={blockIndex} />}
					introBlock={<OthersGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "others-running-text":
			return (
				<CellIntroSwitcher
					contentBlock={<OthersRunningTextCell blockIndex={blockIndex} />}
					introBlock={<OthersRunningTextCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
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
		 *  EMPTY BLOCK
		 *  If layoutId is not recognized, it means that this block is empty.
		 *
		 *********************************************************************/
		case EMPTY_LAYOUT_ID:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
		default:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
	}
}
