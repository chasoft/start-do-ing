/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import { IconArrowCollapse, IconArrowExpand } from "./icons"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
//BUG: why tooltip not working?
export function FullScreenButton() {
	const [searchParams, setSearchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"
	if (isFullScreen) {
		return (
			<Tooltip className="p-2" label="Exit full-page">
				<IconArrowCollapse
					onClick={() => {
						setSearchParams((prev) => {
							prev.delete("full")
							return prev
						})
					}}
					className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
				/>
			</Tooltip>
		)
	}

	return (
		<Tooltip className="p-2" label="View full-page">
			<IconArrowExpand
				onClick={() => {
					setSearchParams((prev) => {
						prev.set("full", "true")
						return prev
					})
				}}
				className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
			/>
		</Tooltip>
	)
}
