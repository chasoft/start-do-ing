/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { RandomLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_LOTTERY } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomLotteryContent({ className, layoutId }: { className?: string, layoutId: RandomLayoutId }) {
	const urlSharingData = getUrlSharingData(RANDOM_LOTTERY)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Lottery Generator</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}