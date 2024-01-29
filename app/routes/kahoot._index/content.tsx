/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { KahootLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT } from "../kahoot/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function KahootIndexContent({ className, layoutId }: { className?: string, layoutId: KahootLayoutId }) {
	const urlSharingData = getUrlSharingData(KAHOOT)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Kahoot</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}