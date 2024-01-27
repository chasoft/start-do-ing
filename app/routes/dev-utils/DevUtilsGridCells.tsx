/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import type { DevUtilsLayoutId, GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DevUtilsGridCells({ className, layoutId }: GridCellProps<DevUtilsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "dev-utils-base64":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-curl-converter":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-hash-generator":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-lorem-ipsum-generator":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-markdown-editor":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-sql-formatter":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
				</div>
			)
		case "dev-utils-string-converter":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
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