/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx";
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";
import { HomeLink } from "~/components/HomeLink";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";
import { firstBlockOfRow1 } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGridCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={HOME.id}>
			<GridCellLink to={HOME.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Home</h2>
					<span className="line-clamp-2">Site introduction</span>
				</div>
				{blockIndex === firstBlockOfRow1 && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}