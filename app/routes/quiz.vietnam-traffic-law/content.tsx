/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { QuizLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { VIETNAM_TRAFFIC_LAW } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function VietnamTrafficLawContent({
	className,
	layoutId
}: {
	className?: string
	layoutId: QuizLayoutId
}) {
	const urlSharingData = useUrlSharingData(VIETNAM_TRAFFIC_LAW)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Vietnam Traffic Law</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
