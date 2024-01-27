/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES } from "./metadata";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

export function LanguagesGroupCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={LANGUAGES.id}>
			<GridCellLink to={LANGUAGES.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Languages Group</h2>
					<span>What? Languages Group what?</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}
