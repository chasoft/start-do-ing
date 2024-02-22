/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_EXTENSIONS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsExtensionsContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DOMAINS_EXTENSIONS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Domain Extensions</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
