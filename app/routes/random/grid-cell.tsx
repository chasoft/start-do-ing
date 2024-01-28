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
import { RANDOM } from "./metadata";
import { RANDOM_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(RANDOM_BLOCKS)

export function RandomGroupCell({ className, isFirstCell }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={RANDOM.id}>
			<GridCellLink to={RANDOM.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Random Group</h2>
					<span>What? Random Group what?</span>
				</div>
				{isFirstCell && <HomeLink />}
			</GridCellLink>
			<GridCellDropdownMenu position="bottom-right" items={dropdownMenuItems} />
		</motion.div>
	)
}
