/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { DomainsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS } from "../domains/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DomainsIndexContent({ className, layoutId }: { className?: string, layoutId: DomainsLayoutId }) {
	const urlSharingData = getUrlSharingData(DOMAINS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				{/* <div className="h-full p-2 sm:p-4 xl:p-6"> */}
				<h1 className="text-lg font-semibold sm:text-2xl">Domains</h1>
				{/* </div> */}
				<div>
					hello world
				</div>
			</motion.div>
		</ContentWrapper >
	)
}