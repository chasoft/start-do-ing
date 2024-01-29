/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { DomainsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS_WHOIS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DomainsWhoisContent({ className, layoutId }: { className?: string, layoutId: DomainsLayoutId }) {
	const urlSharingData = getUrlSharingData(DOMAINS_WHOIS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Domains Whois</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}