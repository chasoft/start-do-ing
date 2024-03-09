/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLeft,
	CellIntroSwitcher,
	CellGridLast,
	CellGridRight
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
	DateTimeDigitalClockCell,
	DateTimeDigitalClockCellIntro
} from "../date-time.digital-clock/grid-cell"
import { DateTimeCountDownDateCellIntro } from "../date-time.count-down.date/grid-cell"
import { DateTimeCountDownTimeCellIntro } from "../date-time.count-down.time/grid-cell"
import { DateTimeCountDownNumberCellIntro } from "../date-time.count-down.number/grid-cell"
import {
	DateTimeCountDownCell,
	DateTimeGroupCell,
	DateTimeGroupCellIntro
} from "./grid-cell"
import type { DateTimeLayoutId, GridCellsProps } from "~/utils/types"
import { getLayoutDetails } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

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
	const [rootLayoutId, subLayoutId] = getLayoutDetails(layoutId)
	let subLayoutIntroContent: React.ReactNode
	let subBlockIndex: number = blockIndex
	switch (rootLayoutId) {
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
		case "$date-time-count-down":
			switch (subLayoutId) {
				case "number":
					subBlockIndex = blockIndex
					subLayoutIntroContent = (
						<DateTimeCountDownNumberCellIntro blockIndex={subBlockIndex} />
					)
					break
				case "time":
					subBlockIndex = blockIndex + 1
					subLayoutIntroContent = (
						<DateTimeCountDownTimeCellIntro blockIndex={subBlockIndex} />
					)
					break
				case "date":
					subBlockIndex = blockIndex + 2
					subLayoutIntroContent = (
						<DateTimeCountDownDateCellIntro blockIndex={subBlockIndex} />
					)
					break
				default:
					break
			}
			return (
				<CellIntroSwitcher
					contentBlock={
						<DateTimeCountDownCell blockIndex={subBlockIndex} className="text-xs" />
					}
					introBlock={subLayoutIntroContent}
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
		 *  EMPTY BLOCK
		 *  If layoutId is not recognized, it means that this block is empty.
		 *
		 *********************************************************************/
		case EMPTY_LAYOUT_ID:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
		default:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
	}
}
