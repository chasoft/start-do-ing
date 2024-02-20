/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Text } from "@mantine/core"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dummyHottestBlocks = [
	{
		id: "block-1",
		label: "block 1",
		to: "/block-1",
		description: "description for block 1"
	},
	{
		id: "block-2",
		label: "block 2",
		to: "/block-2",
		description: "description for block 2"
	},
	{
		id: "block-3",
		label: "block 3",
		to: "/block-3",
		description: "description for block 3"
	},
	{
		id: "block-4",
		label: "block 4",
		to: "/block-4",
		description: "description for block 4"
	}
]

export function HottestBlocks() {
	return (
		<>
			<Text>Top 20 hottest blocks which get most access.</Text>
			<ol>
				{dummyHottestBlocks.map((block) => (
					<li key={block.id}>
						<Link to={block.to}>{block.label}</Link>
					</li>
				))}
			</ol>
		</>
	)
}
