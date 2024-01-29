/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { OthersLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { OTHERS_RUNNING_TEXT } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function OthersRunningTextContent({ className, layoutId }: { className?: string, layoutId: OthersLayoutId }) {
	const urlSharingData = getUrlSharingData(OTHERS_RUNNING_TEXT)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Running Text</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}