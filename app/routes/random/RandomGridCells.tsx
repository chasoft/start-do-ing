/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components"
import { RandomByGroupsCell } from "../random.by-groups/grid-cell"
import { RandomGroupCell } from "./grid-cell"
import { RandomLotteryCell } from "../random.lottery/grid-cell"
import { RandomMagicWheelCell } from "../random.magic-wheel/grid-cell"
import { RandomNumberCell } from "../random.number/grid-cell"
import { RandomPasswordCell } from "../random.password/grid-cell"
import { RandomUsernameCell } from "../random.username/grid-cell"
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
	blockIndex
}: GridCellsProps<RandomLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "random-by-groups":
			return (
				<div className={clsx(className)}>
					<RandomByGroupsCell blockIndex={blockIndex} />
				</div>
			)
		case "random-lottery":
			return (
				<div className={clsx(className)}>
					<RandomLotteryCell blockIndex={blockIndex} />
				</div>
			)
		case "random-magic-wheel":
			return (
				<div className={clsx(className)}>
					<RandomMagicWheelCell blockIndex={blockIndex} />
				</div>
			)
		case "random-number":
			return (
				<div className={clsx(className)}>
					<RandomNumberCell blockIndex={blockIndex} />
				</div>
			)
		case "random-password":
			return (
				<div className={clsx(className)}>
					<RandomPasswordCell blockIndex={blockIndex} />
				</div>
			)
		case "random-username":
			return (
				<div className={clsx(className)}>
					<RandomUsernameCell blockIndex={blockIndex} />
				</div>
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
					<RightGridCell />
				</div>
			)
		case "last":
			return (
				<div className={clsx(className)}>
					<CellGridLast />
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
