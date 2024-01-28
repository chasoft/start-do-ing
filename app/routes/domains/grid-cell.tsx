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
import { DOMAINS } from "./metadata";
import { DOMAINS_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(DOMAINS_BLOCKS)

export function DomainsGroupCell({ className, blockIndex }: GridCellProps) {
	const dropdownPosition = isFirstRow(blockIndex) ? "bottom-right" : "top-right"
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={DOMAINS.id}>
			<GridCellLink to={DOMAINS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Domains Group</h2>
					<span>What? Domains Group what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
			<GridCellDropdownMenu position={dropdownPosition} items={dropdownMenuItems} />
		</motion.div>
	)
}
