/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES } from "../languages/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesIndexContent({
	className,
	layoutId
}: {
	className?: string
	layoutId: LanguagesLayoutId
}) {
	const urlSharingData = useUrlSharingData(LANGUAGES)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Languages</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
