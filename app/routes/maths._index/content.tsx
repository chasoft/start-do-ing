/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { MathsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS } from "../maths/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MathsIndexContent({ className, layoutId }: { className?: string, layoutId: MathsLayoutId }) {
	const urlSharingData = getUrlSharingData(MATHS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Maths</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}