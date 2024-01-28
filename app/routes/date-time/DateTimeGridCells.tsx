/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { DateTimeAnalogClockCell } from "../date-time.analog-clock/grid-cell";
import { DateTimeCalculatorCell } from "../date-time.calculator/grid-cell";
import { DateTimeCalendarCell } from "../date-time.calendar/grid-cell";
import { DateTimeCountDownCell } from "../date-time.count-down/grid-cell";
import { DateTimeDigitalClockCell } from "../date-time.digital-clock/grid-cell";
import { DateTimeIndexCell } from "../date-time._index/grid-cell";
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import type { DateTimeLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeGridCells({ className, isFirstCell, layoutId }: GridCellsProps<DateTimeLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "date-time":
			return (
				<div className={clsx(className)}>
					<DateTimeIndexCell isFirstCell={isFirstCell} />
				</div>
			)
		case "date-time-analog-clock":
			return (
				<div className={clsx(className)}>
					<DateTimeAnalogClockCell isFirstCell={isFirstCell} />
				</div>
			)
		case "date-time-calculator":
			return (
				<div className={clsx(className)}>
					<DateTimeCalculatorCell isFirstCell={isFirstCell} />
				</div>
			)
		case "date-time-calendar":
			return (
				<div className={clsx(className)}>
					<DateTimeCalendarCell isFirstCell={isFirstCell} />
				</div>
			)
		case "date-time-count-down":
			return (
				<div className={clsx(className)}>
					<DateTimeCountDownCell isFirstCell={isFirstCell} />
				</div>
			)
		case "date-time-digital-clock":
			return (
				<div className={clsx(className)}>
					<DateTimeDigitalClockCell isFirstCell={isFirstCell} />
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