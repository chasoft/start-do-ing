/* FRAMEWORK */
import { useNavigate } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { rem } from "@mantine/core"
import { Spotlight } from "@mantine/spotlight"

/* COMPONENTS & UTILS */

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
	return (
		<Spotlight
			actions={actionsList}
			shortcut={["mod + K", "mod + P", "/"]}
			nothingFound="Nothing found..."
			scrollable
			maxHeight={375}
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
