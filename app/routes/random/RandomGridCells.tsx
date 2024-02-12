/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
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
import { RandomNumberCell } from "../random.number/grid-cell"
import { RandomPasswordCell, RandomPasswordCellIntro } from "../random.password/grid-cell"
import { RandomUsernameCell, RandomUsernameCellIntro } from "../random.username/grid-cell"
import type { GridCellsProps, RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomGridCells({
	className,
	layoutId,
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
					contentBlock={<RandomGroupCell />}
					introBlock={<RandomGroupCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
			return (
				<div className={clsx(className)}>
					<RandomGroupCell />
				</div>
			)
		case "random-by-groups":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomByGroupsCell />}
					introBlock={<RandomByGroupsCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-lottery":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomLotteryCell />}
					introBlock={<RandomLotteryCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-magic-wheel":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomMagicWheelCell />}
					introBlock={<RandomMagicWheelCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-number":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomNumberCell />}
					introBlock={<RandomNumberCell />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "random-password":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomPasswordCell />}
					introBlock={<RandomPasswordCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
			return (
				<div className={clsx(className)}>
					<RandomPasswordCell />
				</div>
			)
		case "random-username":
			return (
				<CellIntroSwitcher
					contentBlock={<RandomUsernameCell />}
					introBlock={<RandomUsernameCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "empty":
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
					<CellGridLast blocks={lastGridCellBlocks} />
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
					<motion.div
						className={clsx("h-full bg-gray-200 rounded-lg")}
						layoutId={BLOCK_NOT_FOUND}
					>
						<div className="grid h-full text-lg md:text-xl text-red-900 place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			)
	}
}
