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

export function DomainsWhoiCellIntro() {
	return (
		<CellIntro metaData={DOMAINS_WHOIS} upTo={DOMAINS.to}>
			.... INTRO... SETTINGS...DomainsWhoiCell
		</CellIntro>
	)
}

export function DomainsWhoiCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DOMAINS_WHOIS} />
}
