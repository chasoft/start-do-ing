/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components";
import { DevUtilsBase64Cell } from "../dev-utils.base64/grid-cell";
import { DevUtilsCurlConverterCell } from "../dev-utils.curl-converter/grid-cell";
import { DevUtilsGroupCell } from "./grid-cell";
import { DevUtilsHashGeneratorCell } from "../dev-utils.hash-generator/grid-cell";
import { DevUtilsLoremIpsumGeneratorCell } from "../dev-utils.lorem-ipsum-generator/grid-cell";
import { DevUtilsMarkdownEditorCell } from "../dev-utils.markdown-editor/grid-cell";
import { DevUtilsSqlFormatterCell } from "../dev-utils.sql-formatter/grid-cell";
import { DevUtilsStringConverterCell } from "../dev-utils.string-converter/grid-cell";
import type { DevUtilsLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DevUtilsGridCells({ className, layoutId, blockIndex }: GridCellsProps<DevUtilsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "dev-utils":
			return (
				<div className={clsx(className)}>
					<DevUtilsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-base64":
			return (
				<div className={clsx(className)}>
					<DevUtilsBase64Cell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-curl-converter":
			return (
				<div className={clsx(className)}>
					<DevUtilsCurlConverterCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-hash-generator":
			return (
				<div className={clsx(className)}>
					<DevUtilsHashGeneratorCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-lorem-ipsum-generator":
			return (
				<div className={clsx(className)}>
					<DevUtilsLoremIpsumGeneratorCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-markdown-editor":
			return (
				<div className={clsx(className)}>
					<DevUtilsMarkdownEditorCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-sql-formatter":
			return (
				<div className={clsx(className)}>
					<DevUtilsSqlFormatterCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils-string-converter":
			return (
				<div className={clsx(className)}>
					<DevUtilsStringConverterCell blockIndex={blockIndex} />
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