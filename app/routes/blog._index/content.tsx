/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components";
import { useUrlSharingData } from "~/utils";
import type { BlogLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOG } from "../blog/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function BlogIndexContent({ className, layoutId }: { className?: string, layoutId: BlogLayoutId }) {
	const urlSharingData = useUrlSharingData(BLOG)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Blog</h1>
				</div>
			</motion.div>
		</ContentWrapper >
	)
}