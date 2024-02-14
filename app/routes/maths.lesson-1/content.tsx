/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"
import type { MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_1 } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty1Content({
	className,
	layoutId
}: {
	className?: string
	layoutId: MathsLayoutId
}) {
	const urlSharingData = useUrlSharingData(MATHS_1)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Maths Empty 1</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
