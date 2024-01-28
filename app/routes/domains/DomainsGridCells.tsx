/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { DomainsBuilderCell } from "../domains.builder/grid-cell";
import { DomainsExtensionsCell } from "../domains.extensions/grid-cell";
import { DomainsGroupCell } from "./grid-cell";
import { DomainsWhoiCell } from "../domains.whois/grid-cell";
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import type { DomainsLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DomainsGridCells({ className, layoutId, blockIndex }: GridCellsProps<DomainsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "domains":
			return (
				<div className={clsx(className)}>
					<DomainsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "domains-builder":
			return (
				<div className={clsx(className)}>
					<DomainsBuilderCell blockIndex={blockIndex} />
				</div>
			)
		case "domains-extensions":
			return (
				<div className={clsx(className)}>
					<DomainsExtensionsCell blockIndex={blockIndex} />
				</div>
			)
		case "domains-whois":
			return (
				<div className={clsx(className)}>
					<DomainsWhoiCell blockIndex={blockIndex} />
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