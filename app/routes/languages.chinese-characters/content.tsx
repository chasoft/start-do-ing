/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { LanguagesLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_CHINESE_CHARACTERS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function LanguagesChineseCharactersContent({ className, layoutId }: { className?: string, layoutId: LanguagesLayoutId }) {
	const urlSharingData = getUrlSharingData(LANGUAGES_CHINESE_CHARACTERS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Chinese Characters</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}