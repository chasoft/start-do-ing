/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLeft,
	CellIntroSwitcher,
	CellGridRight,
	CellGridLast
} from "~/components"
import {
	DateTimeAnalogClockCell,
	DateTimeAnalogClockCellIntro
} from "../date-time.analog-clock/grid-cell"
import {
	DateTimeCalculatorCell,
	DateTimeCalculatorCellIntro
} from "../date-time.calculator/grid-cell"
import {
	DateTimeCalendarCell,
	DateTimeCalendarCellIntro
} from "../date-time.calendar/grid-cell"
import {
	DateTimeCountDownCell,
	DateTimeCountDownCellIntro
} from "../date-time.count-down/grid-cell"
import {
	DateTimeDigitalClockCell,
	DateTimeDigitalClockCellIntro
} from "../date-time.digital-clock/grid-cell"
import { DateTimeGroupCell, DateTimeGroupCellIntro } from "./grid-cell"
import type { DateTimeLayoutId, GridCellsProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<DateTimeLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "date-time":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeGroupCell blockIndex={blockIndex} />}
					introBlock={<DateTimeGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "date-time-analog-clock":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeAnalogClockCell blockIndex={blockIndex} />}
					introBlock={<DateTimeAnalogClockCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "date-time-calculator":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeCalculatorCell blockIndex={blockIndex} />}
					introBlock={<DateTimeCalculatorCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "date-time-calendar":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeCalendarCell blockIndex={blockIndex} />}
					introBlock={<DateTimeCalendarCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "date-time-count-down":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeCountDownCell blockIndex={blockIndex} />}
					introBlock={<DateTimeCountDownCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "date-time-digital-clock":
			return (
				<CellIntroSwitcher
					contentBlock={<DateTimeDigitalClockCell blockIndex={blockIndex} />}
					introBlock={<DateTimeDigitalClockCellIntro blockIndex={blockIndex} />}
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
					<CellGridLast blocks={lastGridCellBlocks} blockIndex={blockIndex} />
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
						<div className="grid h-full text-lg text-red-900 md:text-xl place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			)
	}
}
