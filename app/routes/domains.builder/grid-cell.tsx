/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DOMAINS_BUILDER } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DomainsBuilderCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DOMAINS_BUILDER.id}>
			<GridCellLink to={DOMAINS_BUILDER.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Domains Builder</h2>
					<span className="line-clamp-2">...</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}