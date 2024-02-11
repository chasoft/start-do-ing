/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_MARKDOWN_EDITOR } from "./metadata"
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsMarkdownEditorCellIntro() {
	return (
		<CellIntro metaData={DEV_UTILS_MARKDOWN_EDITOR} upTo={DEV_UTILS.to}>
			.... INTRO... SETTINGS...DevUtilsMarkdownEditorCell
		</CellIntro>
	)
}

export function DevUtilsMarkdownEditorCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DEV_UTILS_MARKDOWN_EDITOR} />
}
