/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { MathsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS_EMPTY_4 } from "../maths.empty-4/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MathsEmpty4Content({ className, layoutId }: { className?: string, layoutId: MathsLayoutId }) {
	const urlSharingData = getUrlSharingData(MATHS_EMPTY_4)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Maths Empty 4</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}