/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Drawer, Tooltip } from "@mantine/core"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { useToggleSearchParams } from "~/utils"
import type { MarkdownString } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHelp } from "@tabler/icons-react"
import { SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type Position = "top" | "bottom" | "left" | "right"

export function HelpButton({
	data,
	position = "right",
	title = "Help Content"
}: {
	data?: MarkdownString
	position?: Position
	title?: string
}) {
	const [showHelp, { open, close }] = useToggleSearchParams({
		key: SPR.side.key,
		value: SPR.side.values.help
	})

	if (!data) return null
	return (
		<>
			<Tooltip className="p-2" label="Show Help">
				<IconHelp
					className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
					onClick={open}
				/>
			</Tooltip>

			<Drawer opened={showHelp} onClose={close} position={position} title={title}>
				<Markdown className="prose prose-base max-w-3xl">{data}</Markdown>
			</Drawer>
		</>
	)
}