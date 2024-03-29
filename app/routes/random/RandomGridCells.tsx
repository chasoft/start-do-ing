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
import {
	RandomByGroupsCell,
	RandomByGroupsCellIntro
} from "../random.by-groups/grid-cell"
import { RandomGroupCell, RandomGroupCellIntro } from "./grid-cell"
import { RandomLotteryCell, RandomLotteryCellIntro } from "../random.lottery/grid-cell"
import {
	RandomMagicWheelCell,
	RandomMagicWheelCellIntro
} from "../random.magic-wheel/grid-cell"
import { RandomNumberCell, RandomNumberCellIntro } from "../random.number/grid-cell"
import { RandomPasswordCell, RandomPasswordCellIntro } from "../random.password/grid-cell"
import { RandomUsernameCell, RandomUsernameCellIntro } from "../random.username/grid-cell"
import type { GridCellsProps, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<RandomLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "random":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomGroupCell blockIndex={blockIndex} />}
					introBlock={<RandomGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-by-groups":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomByGroupsCell blockIndex={blockIndex} />}
					introBlock={<RandomByGroupsCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-lottery":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomLotteryCell blockIndex={blockIndex} />}
					introBlock={<RandomLotteryCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-magic-wheel":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomMagicWheelCell blockIndex={blockIndex} />}
					introBlock={<RandomMagicWheelCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-number":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomNumberCell blockIndex={blockIndex} />}
					introBlock={<RandomNumberCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-password":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomPasswordCell blockIndex={blockIndex} />}
					introBlock={<RandomPasswordCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-username":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomUsernameCell blockIndex={blockIndex} />}
					introBlock={<RandomUsernameCellIntro blockIndex={blockIndex} />}
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
