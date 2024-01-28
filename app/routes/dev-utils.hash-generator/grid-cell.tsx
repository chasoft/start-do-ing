/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";
import { HomeLink } from "~/components/HomeLink";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEV_UTILS_HASH_GENERATOR } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DevUtilsHashGeneratorCell({ className, isFirstCell }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DEV_UTILS_HASH_GENERATOR.id}>
			<GridCellLink to={DEV_UTILS_HASH_GENERATOR.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Hash Generator</h2>
					<span className="line-clamp-2">...</span>
				</div>
				{isFirstCell && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}