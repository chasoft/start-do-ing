/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import type { DateTimeLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DateTimeIndexContent({ className, layoutId }: { className?: string, layoutId: DateTimeLayoutId }) {
	return (
		<ContentWrapper>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Date/Time</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}