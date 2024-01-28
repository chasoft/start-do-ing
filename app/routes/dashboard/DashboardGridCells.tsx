/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { DashboardSettingsCell } from "../dashboard.settings._index/grid-cell";
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import type { DashboardLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";
import { DashboardGroupCell } from "./grid-cell";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DashboardGridCells({ className, layoutId, blockIndex }: GridCellsProps<DashboardLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "dashboard":
			return (
				<div className={clsx(className)}>
					<DashboardGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "settings":
			return (
				<div className={clsx(className)}>
					<DashboardSettingsCell blockIndex={blockIndex} />
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