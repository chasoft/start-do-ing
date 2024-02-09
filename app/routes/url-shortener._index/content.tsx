/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { UrlShortenerLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "../url-shortener/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function URLShortenerIndexContent({ className, layoutId }: { className?: string, layoutId: UrlShortenerLayoutId }) {
	const urlSharingData = getUrlSharingData(URL_SHORTENER)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">URL Shortener</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}