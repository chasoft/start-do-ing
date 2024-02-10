/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_WHOIS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsWhoiCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} blockIndex={blockIndex} metaData={DOMAINS_WHOIS} />
	)
}
