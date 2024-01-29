/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGroup } from "~/components";
import { getMenuItemsFromBlocks } from "~/utils";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";
import { HOME_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(HOME_BLOCKS)

export function HomeGridCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={HOME}
		/>
	)
}