/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOG } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function BlogIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG.id}>
			<GridCellLink to={BLOG.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog</h2>
					<span>What? Blog what?</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}
