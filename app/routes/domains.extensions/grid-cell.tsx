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

export function DomainsExtensionsCellIntro() {
	return (
		<CellIntro metaData={DOMAINS_EXTENSIONS} upTo={DOMAINS.to}>
			.... INTRO... SETTINGS...DomainsExtensionsCell
		</CellIntro>
	)
}

export function DomainsExtensionsCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DOMAINS_EXTENSIONS} />
}
