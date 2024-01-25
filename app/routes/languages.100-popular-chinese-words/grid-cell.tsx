/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function Languages100PopularChineseWordsCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={LANGUAGES_100_POPULAR_CHINESE_WORDS.id}>
			<GridCellLink to={LANGUAGES_100_POPULAR_CHINESE_WORDS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">100 Popular Chinese Words</h2>
					<span className="line-clamp-2">.....</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}