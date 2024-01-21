/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { AboutGridCell } from "~/routes/about/grid-cell";
import { CountDownGridCell } from "~/routes/count-down/grid-cell";
import { EmptyGridCell, LeftGridCell, RightGridCell } from ".";
import { HomeGridCell } from "~/routes/_index/grid-cell";
import { MagicWheelGridCell } from "~/routes/magic-wheel/grid-cell";
import { PasswordGeneratorGridCell } from "~/routes/random.password-generator/grid-cell";
import { RandomGridCell } from "~/routes/random._index/grid-cell";
import type { LayoutId } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/constants";
import { LastGridCell } from "./LastGridCell";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function GridCell({ className, layoutId }: { className?: string, layoutId?: LayoutId }) {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  SYSTEM BLOCKS
		 * 
		 *********************************************************************/
		case "home":
			return (
				<div className={clsx(className)}>
					<HomeGridCell />
				</div>
			)
		case "about":
			return (
				<div className={clsx(className)}>
					<AboutGridCell />
				</div>
			)
		case "empty":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
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
		/**********************************************************************
		 * 
		 *  FUNCTIONAL BLOCKS
		 * 
		 *********************************************************************/
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGridCell />
				</div>
			)
		case "password-generator":
			return (
				<div className={clsx(className)}>
					<PasswordGeneratorGridCell />
				</div>
			)
		case "count-down":
			return (
				<div className={clsx(className)}>
					<CountDownGridCell />
				</div>
			)
		case "magic-wheel":
			return (
				<div className={clsx(className)}>
					<MagicWheelGridCell />
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
					<motion.div className={clsx("h-full bg-gray-200")} layoutId={BLOCK_NOT_FOUND}>
						<div className="grid text-2xl text-red-900 place-content-center">BLOCK NOT FOUND</div>
					</motion.div>
				</div>
			);
	}
}