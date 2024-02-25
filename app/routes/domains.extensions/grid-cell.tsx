/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_EXTENSIONS } from "./metadata"
import { DOMAINS } from "../domains/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsExtensionsCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={DOMAINS_EXTENSIONS} upTo={DOMAINS.to} blockIndex={blockIndex} />
	)
}

export function DomainsExtensionsCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={DOMAINS_EXTENSIONS}
			blockIndex={blockIndex}
		/>
	)
}
