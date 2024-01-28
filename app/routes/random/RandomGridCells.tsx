/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import { RandomByGroupsCell } from "../random.by-groups/grid-cell";
import { RandomGroupCell } from "./grid-cell";
import { RandomLotteryCell } from "../random.lottery/grid-cell";
import { RandomMagicWheelCell } from "../random.magic-wheel/grid-cell";
import { RandomNumberCell } from "../random.number/grid-cell";
import { RandomPasswordCell } from "../random.password/grid-cell";
import { RandomUsernameCell } from "../random.username/grid-cell";
import type { GridCellsProps, RandomLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomGridCells({ className, isFirstCell, layoutId }: GridCellsProps<RandomLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGroupCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-by-groups":
			return (
				<div className={clsx(className)}>
					<RandomByGroupsCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-lottery":
			return (
				<div className={clsx(className)}>
					<RandomLotteryCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-magic-wheel":
			return (
				<div className={clsx(className)}>
					<RandomMagicWheelCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-number":
			return (
				<div className={clsx(className)}>
					<RandomNumberCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-password":
			return (
				<div className={clsx(className)}>
					<RandomPasswordCell isFirstCell={isFirstCell} />
				</div>
			)
		case "random-username":
			return (
				<div className={clsx(className)}>
					<RandomUsernameCell isFirstCell={isFirstCell} />
				</div>
			)
		case "empty":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
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
					<LeftGridCell />
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
					<LastGridCell />
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
					<motion.div className={clsx("h-full bg-gray-200 rounded-lg")} layoutId={BLOCK_NOT_FOUND}>
						<div className="grid h-full text-lg md:text-xl text-red-900 place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			);
	}
}