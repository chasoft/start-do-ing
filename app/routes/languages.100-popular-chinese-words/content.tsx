/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { LanguagesLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function Languages100PopularChineseWordsContent({ className, layoutId }: { className?: string, layoutId: LanguagesLayoutId }) {
	const urlSharingData = getUrlSharingData(LANGUAGES_100_POPULAR_CHINESE_WORDS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">100 Popular Chinese Words</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}