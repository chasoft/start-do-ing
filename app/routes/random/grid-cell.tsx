/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils";
import { CellGroup } from "~/components";
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

export function RandomGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={clsx(className)}
			dropdownMenuItems={dropdownMenuItems}
			metaData={RANDOM}
		/>
	)
}
