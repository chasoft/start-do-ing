/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_WHOIS } from "./metadata"
import { DOMAINS } from "../domains/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsWhoiCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={DOMAINS_WHOIS} upTo={DOMAINS.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...DomainsWhoiCell
		</CellIntro>
	)
}

export function DomainsWhoiCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={DOMAINS_WHOIS} blockIndex={blockIndex} />
	)
}
