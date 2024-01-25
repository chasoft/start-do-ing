/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { URL_SHORTENER } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function URLShortenerIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={URL_SHORTENER.id}>
			<GridCellLink to={URL_SHORTENER.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">URL Shortener</h2>
					<span>What? URL Shortener what?</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}
