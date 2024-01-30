/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { DateTimeLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DATE_TIME_CALCULATOR } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeCalculatorContent({ className, layoutId }: { className?: string, layoutId: DateTimeLayoutId }) {
	const urlSharingData = getUrlSharingData(DATE_TIME_CALCULATOR)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Date/Time Calculator</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}