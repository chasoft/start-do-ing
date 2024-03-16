/* FRAMEWORK */
import { useNavigate } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { rem } from "@mantine/core"
import { Spotlight } from "@mantine/spotlight"

/* COMPONENTS & UTILS */
import { useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { getActionsList } from "~/data"
import { IconSearch } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CommandK() {
	const navigate = useNavigate()
	const actionsList = getActionsList(navigate)
	const isMobileView = useIsMobileWindowSize()
	return (
		<Spotlight
			actions={actionsList}
			shortcut={["mod + K", "mod + P", "/"]}
			nothingFound="Nothing found..."
			scrollable
			maxHeight={isMobileView ? "100%" : undefined}
			highlightQuery
			searchProps={{
				leftSection: (
					<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
				),
				placeholder: "Search..."
			}}
		/>
	)
}
