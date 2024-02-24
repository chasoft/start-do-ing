/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Drawer, Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import type { MarkdownString } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHelp } from "@tabler/icons-react"
import Markdown from "react-markdown"
import { useCallback } from "react"

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
	const [searchParams, setSearchParams] = useSearchParams()
	const showHelp = searchParams.get("side") === "help"

	const openHelpSidebarPanel = useCallback(() => {
		setSearchParams((prev) => {
			prev.set("side", "help")
			return prev
		})
	}, [setSearchParams])

	const closeHelpSidebarPanel = useCallback(() => {
		setSearchParams((prev) => {
			prev.delete("side")
			return prev
		})
	}, [setSearchParams])

	if (!data) return null
	return (
		<>
			<Tooltip className="p-2" label="Show Help">
				<IconHelp
					className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
					onClick={openHelpSidebarPanel}
				/>
			</Tooltip>

			<Drawer
				opened={showHelp}
				onClose={closeHelpSidebarPanel}
				position={position}
				title={title}
			>
				<Markdown className="prose prose-base max-w-3xl">{data}</Markdown>
			</Drawer>
		</>
	)
}
