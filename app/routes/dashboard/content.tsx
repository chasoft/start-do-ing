/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { DashboardLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DASHBOARD } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DashboardLayoutFeature({
	className,
	layoutId
}: {
	className?: string
	layoutId: DashboardLayoutId
}) {
	const urlSharingData = useUrlSharingData(DASHBOARD)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={`${className} bg-red-500`} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Dashboard Layout</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
