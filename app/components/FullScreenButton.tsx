/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import { IconArrowCollapse, IconArrowExpand } from "./icons"
import { useCallback } from "react"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { searchParamsSettings } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
//BUG: why tooltip not working?
export function FullScreenButton() {
	const [searchParams, setSearchParams] = useSearchParams()
	const isFullScreen =
		searchParams.get(searchParamsSettings.view.key) ===
		searchParamsSettings.view.values.fullscreen

	const exitFullpage = useCallback(() => {
		setSearchParams((prev) => {
			prev.delete(searchParamsSettings.view.key)
			return prev
		})
	}, [setSearchParams])

	const viewFullpage = useCallback(() => {
		setSearchParams((prev) => {
			prev.set(searchParamsSettings.view.key, searchParamsSettings.view.values.fullscreen)
			return prev
		})
	}, [setSearchParams])

	if (isFullScreen) {
		return (
			<Tooltip className="p-2" label="Exit full-page">
				<IconArrowCollapse
					onClick={exitFullpage}
					className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
				/>
			</Tooltip>
		)
	}

	return (
		<Tooltip className="p-2" label="View full-page">
			<IconArrowExpand
				onClick={viewFullpage}
				className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
			/>
		</Tooltip>
	)
}
