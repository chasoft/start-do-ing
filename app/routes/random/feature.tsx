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

export function RandomLayoutFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<ContentWrapper>
			<motion.div className={`${className} bg-red-500`} layoutId={layoutId}>
				<h1>Random Feature</h1>
			</motion.div>
		</ContentWrapper>
	)
}