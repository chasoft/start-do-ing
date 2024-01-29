/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components";
import { DateTimeAnalogClockCell } from "../date-time.analog-clock/grid-cell";
import { DateTimeCalculatorCell } from "../date-time.calculator/grid-cell";
import { DateTimeCalendarCell } from "../date-time.calendar/grid-cell";
import { DateTimeCountDownCell } from "../date-time.count-down/grid-cell";
import { DateTimeDigitalClockCell } from "../date-time.digital-clock/grid-cell";
import { DateTimeIndexCell } from "../date-time._index/grid-cell";
import type { DateTimeLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeGridCells({ className, layoutId, blockIndex }: GridCellsProps<DateTimeLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "date-time":
			return (
				<div className={clsx(className)}>
					<DateTimeIndexCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time-analog-clock":
			return (
				<div className={clsx(className)}>
					<DateTimeAnalogClockCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time-calculator":
			return (
				<div className={clsx(className)}>
					<DateTimeCalculatorCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time-calendar":
			return (
				<div className={clsx(className)}>
					<DateTimeCalendarCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time-count-down":
			return (
				<div className={clsx(className)}>
					<DateTimeCountDownCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time-digital-clock":
			return (
				<div className={clsx(className)}>
					<DateTimeDigitalClockCell blockIndex={blockIndex} />
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
					<motion.div className={clsx("h-full bg-gray-200 rounded-lg")} layoutId={BLOCK_NOT_FOUND}>
						<div className="grid h-full text-lg text-red-900 md:text-xl place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			);
	}
}