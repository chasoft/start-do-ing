/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { useUrlSharingData } from "~/utils";
import type { DateTimeLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "../date-time/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeIndexContent({ className, layoutId }: { className?: string, layoutId: DateTimeLayoutId }) {
	const urlSharingData = useUrlSharingData(DATE_TIME)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Date/Time</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}