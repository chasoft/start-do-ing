/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { CellItem } from "~/components";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_CALCULATOR } from "./metadata";
import clsx from "clsx";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeCalculatorCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DATE_TIME_CALCULATOR.id}>

			<div className="grid grid-cols-2 gap-1 lg:gap-2 h-full">

				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">1</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">2</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">3</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">4</div>

			</div>

		</motion.div>
	)
}