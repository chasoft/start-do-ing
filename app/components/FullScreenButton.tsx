/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { IconArrowCollapse, IconArrowExpand } from "./icons"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function FullScreenButton() {
	const [searchParams, setSearchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"
	if (isFullScreen) {
		return (
			<div className="p-2">
				<IconArrowCollapse
					onClick={() => {
						setSearchParams((prev) => {
							prev.delete("full")
							return prev
						})
					}}
					className="w-6 h-6 text-gray-700 transition-all cursor-pointer hover:scale-125 active:scale-150"
				/>
			</div>
		)
	}

	return (
		<div className="p-2">
			<IconArrowExpand
				onClick={() => {
					setSearchParams((prev) => {
						prev.set("full", "true")
						return prev
					})
				}}
				className="w-6 h-6 text-gray-700 transition-all cursor-pointer hover:scale-125 active:scale-150"
			/>
		</div>
	)
}
