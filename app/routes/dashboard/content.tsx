/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DashboardLayoutFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<ContentWrapper>
			<motion.div className={`${className} bg-red-500`} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Dashboard Layout</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}