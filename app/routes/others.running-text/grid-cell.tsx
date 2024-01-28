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
import { OTHERS_RUNNING_TEXT } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function OthersRunningTextCell({ className, isFirstCell }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={OTHERS_RUNNING_TEXT.id}>
			<GridCellLink to={OTHERS_RUNNING_TEXT.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Running Text</h2>
					<span className="line-clamp-2">...</span>
				</div>
				{isFirstCell && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}