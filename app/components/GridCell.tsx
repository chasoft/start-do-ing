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
				<div className={clsx(className, "overflow-hidden")}>
					<HomeGridCell />
				</div>
			)
		case "about":
			return (
				<div className={clsx(className, "overflow-hidden")}>
					<AboutGridCell />
				</div>
			)
		case "empty":
			return (
				<div className={clsx(className, "overflow-hidden")}>
					<EmptyGridCell />
				</div>
			)
		case "last":
			return (
				<div className={clsx(className, "overflow-hidden")}>
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
				<div className={clsx(className, "overflow-hidden")}>
					<LeftGridCell />
				</div>
			)
		case "right":
			return (
				<div className={clsx(className, "overflow-hidden")}>
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
				<div className={clsx(className, "overflow-hidden")}>
					<RandomGridCell />
				</div>
			)
		case "password-generator":
			return (
				<div className={clsx(className, "overflow-hidden")}>
					<PasswordGeneratorGridCell />
				</div>
			)
		case "count-down":
			return (
				<div className={clsx(className, "overflow-hidden")}>
					<CountDownGridCell />
				</div>
			)
		case "magic-wheel":
			return (
				<div className={clsx(className, "overflow-hidden")}>
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
				<div className={clsx(className, "h-full overflow-hidden")}>
					<motion.div className={clsx("h-full bg-gray-200")} layoutId={BLOCK_NOT_FOUND}>
						<div className="grid text-2xl text-red-900 place-content-center">BLOCK NOT FOUND</div>
					</motion.div>
				</div>
			);
	}
}