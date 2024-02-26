/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "../date-time/metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeIndexContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DATE_TIME)
	useHelpContents(helpContents)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Date/Time</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
