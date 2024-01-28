/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { EmptyGridCell, LeftGridCell, RightGridCell } from ".";
import { HomeGridCell } from "~/routes/_index/grid-cell";
import type { GridCellsProps, GroupId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";
import { LastGridCell } from "./LastGridCell";
import { DateTimeGroupCell } from "~/routes/date-time/grid-cell";
import { DevUtilsGroupCell } from "~/routes/dev-utils/grid-cell";
import { DomainsGroupCell } from "~/routes/domains/grid-cell";
import { KahootGroupCell } from "~/routes/kahoot/grid-cell";
import { LanguagesGroupCell } from "~/routes/languages/grid-cell";
import { MathsGroupCell } from "~/routes/maths/grid-cell";
import { RandomGroupCell } from "~/routes/random/grid-cell";
import { UrlShortenerGroupCell } from "~/routes/url-shortener/grid-cell";
import { OthersGroupCell } from "~/routes/others/grid-cell";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RootGridCells({ className, layoutId, blockIndex }: GridCellsProps<GroupId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "home":
			return (
				<div className={clsx(className)}>
					<HomeGridCell blockIndex={blockIndex} />
				</div>
			)
		case "date-time":
			return (
				<div className={clsx(className)}>
					<DateTimeGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils":
			return (
				<div className={clsx(className)}>
					<DevUtilsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "domains":
			return (
				<div className={clsx(className)}>
					<DomainsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "kahoot":
			return (
				<div className={clsx(className)}>
					<KahootGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "languages":
			return (
				<div className={clsx(className)}>
					<LanguagesGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "maths":
			return (
				<div className={clsx(className)}>
					<MathsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "url-shortener":
			return (
				<div className={clsx(className)}>
					<UrlShortenerGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "others":
			return (
				<div className={clsx(className)}>
					<OthersGroupCell blockIndex={blockIndex} />
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