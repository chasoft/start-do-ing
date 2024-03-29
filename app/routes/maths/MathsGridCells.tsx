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
import { MathsEmpty1Cell, MathsEmpty1CellIntro } from "../maths.lesson-1/grid-cell"
import { MathsEmpty2Cell, MathsEmpty2CellIntro } from "../maths.lesson-2/grid-cell"
import { MathsEmpty3Cell, MathsEmpty3CellIntro } from "../maths.lesson-3/grid-cell"
import { MathsEmpty4Cell, MathsEmpty4CellIntro } from "../maths.lesson-4/grid-cell"
import type { GridCellsProps, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"
import { MathsGroupCell, MathsGroupCellIntro } from "./grid-cell"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<MathsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "maths":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsGroupCell blockIndex={blockIndex} />}
					introBlock={<MathsGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-1":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty1Cell blockIndex={blockIndex} />}
					introBlock={<MathsEmpty1CellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-2":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty2Cell blockIndex={blockIndex} />}
					introBlock={<MathsEmpty2CellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-3":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty3Cell blockIndex={blockIndex} />}
					introBlock={<MathsEmpty3CellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-4":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty4Cell blockIndex={blockIndex} />}
					introBlock={<MathsEmpty4CellIntro blockIndex={blockIndex} />}
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
