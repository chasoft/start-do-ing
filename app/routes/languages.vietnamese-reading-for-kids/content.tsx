/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesVietnameseReadingForKidsContent({
	className
}: {
	className?: string
}) {
	const urlSharingData = useUrlSharingData(LANGUAGES_VIETNAMESE_READING_FOR_KIDS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">
						Vietnamese Reading For Kids
					</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
