/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_EXTENSIONS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsExtensionsCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			blockIndex={blockIndex}
			metaData={DOMAINS_EXTENSIONS}
		/>
	)
}
