/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import { useToggleSearchParams } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconArrowsMinimize, IconArrowsMaximize } from "@tabler/icons-react"
import { SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function FullScreenButton() {
	const [isFullScreen, { open, close }] = useToggleSearchParams({
		key: SPR.view.key,
		value: SPR.view.values.fullpage
	})

	if (isFullScreen) {
		return (
			<Tooltip className="lg:p-2" label="Exit full-page">
				<IconArrowsMinimize
					onClick={close}
					className="size-10 cursor-pointer p-2 text-sky-900 transition-all hover:scale-125 hover:text-sky-700 active:scale-150 lg:size-6 lg:p-0"
				/>
			</Tooltip>
		)
	}

	return (
		<Tooltip className="lg:p-2" label="View full-page">
			<IconArrowsMaximize
				onClick={open}
				className="size-10 cursor-pointer p-2 text-sky-900 transition-all hover:scale-125 hover:text-sky-700 active:scale-150 lg:size-6 lg:p-0"
			/>
		</Tooltip>
	)
}
