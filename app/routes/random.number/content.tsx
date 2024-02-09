/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { useUrlSharingData } from "~/utils";
import type { RandomLayoutId } from "~/utils/types";
import { RANDOM_NUMBER } from "./metadata";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomNumberContent({ className, layoutId }: { className?: string, layoutId: RandomLayoutId }) {
	const urlSharingData = useUrlSharingData(RANDOM_NUMBER)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Random Number</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}