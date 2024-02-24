/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import { RANDOM_NUMBER } from "./metadata"
import { helpContents } from "./helpContents"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomNumberContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(RANDOM_NUMBER)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Random Number</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
