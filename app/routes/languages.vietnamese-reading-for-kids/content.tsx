/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesVietnameseReadingForKidsContent({
	className,
	layoutId
}: {
	className?: string
	layoutId: LanguagesLayoutId
}) {
	const urlSharingData = useUrlSharingData(LANGUAGES_VIETNAMESE_READING_FOR_KIDS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">
						Vietnamese Reading For Kids
					</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
