/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_CHINESE_CHARACTERS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function LanguagesChineseCharactersCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={LANGUAGES_CHINESE_CHARACTERS.id}>
			<GridCellLink to={LANGUAGES_CHINESE_CHARACTERS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Chinese Characters</h2>
					<span className="line-clamp-2">...</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}