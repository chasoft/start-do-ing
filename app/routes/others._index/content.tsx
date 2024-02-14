/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { OthersLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS } from "../others/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersIndexContent({
	className,
	layoutId
}: {
	className?: string
	layoutId: OthersLayoutId
}) {
	const urlSharingData = useUrlSharingData(OTHERS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Others</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
