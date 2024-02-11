/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLeft,
	CellGridRight,
	CellIntroSwitcher
} from "~/components"
import {
	DevUtilsBase64Cell,
	DevUtilsBase64CellIntro
} from "../dev-utils.base64/grid-cell"
import {
	DevUtilsCurlConverterCell,
	DevUtilsCurlConverterCellIntro
} from "../dev-utils.curl-converter/grid-cell"
import { DevUtilsGroupCell, DevUtilsGroupCellIntro } from "./grid-cell"
import {
	DevUtilsHashGeneratorCell,
	DevUtilsHashGeneratorCellIntro
} from "../dev-utils.hash-generator/grid-cell"
import {
	DevUtilsLoremIpsumGeneratorCell,
	DevUtilsLoremIpsumGeneratorCellIntro
} from "../dev-utils.lorem-ipsum-generator/grid-cell"
import {
	DevUtilsMarkdownEditorCell,
	DevUtilsMarkdownEditorCellIntro
} from "../dev-utils.markdown-editor/grid-cell"
import {
	DevUtilsSqlFormatterCell,
	DevUtilsSqlFormatterCellIntro
} from "../dev-utils.sql-formatter/grid-cell"
import {
	DevUtilsStringConverterCell,
	DevUtilsStringConverterCellIntro
} from "../dev-utils.string-converter/grid-cell"
import type { DevUtilsLayoutId, GridCellsProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsGridCells({
	className,
	layoutId,
	isIntroBlock
}: GridCellsProps<DevUtilsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "dev-utils":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsGroupCell />}
					introBlock={<DevUtilsGroupCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-base64":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsBase64Cell />}
					introBlock={<DevUtilsBase64CellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-curl-converter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsCurlConverterCell />}
					introBlock={<DevUtilsCurlConverterCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-hash-generator":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsHashGeneratorCell />}
					introBlock={<DevUtilsHashGeneratorCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-lorem-ipsum-generator":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsLoremIpsumGeneratorCell />}
					introBlock={<DevUtilsLoremIpsumGeneratorCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-markdown-editor":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsMarkdownEditorCell />}
					introBlock={<DevUtilsMarkdownEditorCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-sql-formatter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsSqlFormatterCell />}
					introBlock={<DevUtilsSqlFormatterCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-string-converter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsStringConverterCell />}
					introBlock={<DevUtilsStringConverterCellIntro />}
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
