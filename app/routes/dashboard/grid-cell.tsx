/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks, isFirstCell, isFirstRow } from "~/utils";
import { GridCellDropdownMenu } from "~/components/GridCellDropdownMenu";
import { GridCellLink } from "~/components";
import { HomeLink } from "~/components/HomeLink";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DASHBOARD } from "./metadata";
import { DASHBOARD_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(DASHBOARD_BLOCKS)

export function DashboardGroupCell({ className, blockIndex }: GridCellProps) {
	const dropdownPosition = isFirstRow(blockIndex) ? "bottom-right" : "top-right"
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={DASHBOARD.id}>
			<GridCellLink to={DASHBOARD.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Dashboard Group</h2>
					<span>What? Dashboard Group what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
			<GridCellDropdownMenu position={dropdownPosition} items={dropdownMenuItems} />
		</motion.div>
	)
}
