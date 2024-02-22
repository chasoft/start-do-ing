/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCountDownContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DATE_TIME_COUNT_DOWN)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Date/Time Count Down</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
