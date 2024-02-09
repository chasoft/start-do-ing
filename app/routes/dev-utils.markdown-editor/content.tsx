/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { getUrlSharingData } from "~/utils";
import type { DevUtilsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_MARKDOWN_EDITOR } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DevUtilsMarkdownEditorContent({ className, layoutId }: { className?: string, layoutId: DevUtilsLayoutId }) {
	const urlSharingData = getUrlSharingData(DEV_UTILS_MARKDOWN_EDITOR)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Markdown Editor</h1>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}