/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_BUILDER } from "./metadata"
import { DOMAINS } from "../domains/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsBuilderCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={DOMAINS_BUILDER} upTo={DOMAINS.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...DomainsBuilderCell
		</CellIntro>
	)
}

export function DomainsBuilderCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={DOMAINS_BUILDER} blockIndex={blockIndex} />
	)
}
