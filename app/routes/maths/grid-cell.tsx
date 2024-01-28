/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils";
import { GridCellDropdownMenu } from "~/components/GridCellDropdownMenu";
import { GridCellLink } from "~/components";
import { HomeLink } from "~/components/HomeLink";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS } from "./metadata";
import { MATHS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(MATHS_BLOCKS)

export function MathsGroupCell({ className, isFirstCell }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={MATHS.id}>
			<GridCellLink to={MATHS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Maths Group</h2>
					<span>What? Maths Group what?</span>
				</div>
				{isFirstCell && <HomeLink />}
			</GridCellLink>
			<GridCellDropdownMenu position="bottom-right" items={dropdownMenuItems} />
		</motion.div>
	)
}
