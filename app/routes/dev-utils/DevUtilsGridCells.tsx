/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLast,
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
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
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
					contentBlock={<DevUtilsGroupCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-base64":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsBase64Cell blockIndex={blockIndex} />}
					introBlock={<DevUtilsBase64CellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-curl-converter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsCurlConverterCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsCurlConverterCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-hash-generator":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsHashGeneratorCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsHashGeneratorCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-lorem-ipsum-generator":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsLoremIpsumGeneratorCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsLoremIpsumGeneratorCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-markdown-editor":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsMarkdownEditorCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsMarkdownEditorCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-sql-formatter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsSqlFormatterCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsSqlFormatterCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "dev-utils-string-converter":
			return (
				<CellIntroSwitcher
					contentBlock={<DevUtilsStringConverterCell blockIndex={blockIndex} />}
					introBlock={<DevUtilsStringConverterCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case EMPTY_LAYOUT_ID:
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
					<div className={clsx("h-full rounded-lg bg-gray-200")}>
						<div className="grid h-full place-content-center text-lg text-red-900 md:text-xl">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</div>
				</div>
			)
	}
}
