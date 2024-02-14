/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { RandomLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_BY_GROUPS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomByGroupsContent({
	className,
	layoutId
}: {
	className?: string
	layoutId: RandomLayoutId
}) {
	const urlSharingData = useUrlSharingData(RANDOM_BY_GROUPS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Password Generator</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
