/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Tooltip } from "@mantine/core"
import { openSpotlight } from "@mantine/spotlight"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconSearch } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function SearchButton() {
	return (
		<Tooltip label="Show Help">
			<IconSearch
				className="size-10 cursor-pointer p-2 text-blue-900 transition-transform hover:scale-125 hover:text-blue-700 active:scale-150"
				onClick={openSpotlight}
			/>
		</Tooltip>
	)
}
