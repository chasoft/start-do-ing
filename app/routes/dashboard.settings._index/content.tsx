/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { DashboardLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DASHBOARD_SETTINGS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function SettingsIndexFeature({
	className,
	layoutId
}: {
	className?: string
	layoutId: DashboardLayoutId
}) {
	const urlSharingData = useUrlSharingData(DASHBOARD_SETTINGS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Settings</h1>
					<span>Where you have some </span>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
