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

export function HomeFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<ContentWrapper>
			<motion.div className={className} layoutId={layoutId}>
				<h1>Home Feature</h1>
			</motion.div>
		</ContentWrapper>
	)
}