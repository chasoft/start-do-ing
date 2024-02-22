/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS } from "../others/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersIndexContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(OTHERS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Others</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
