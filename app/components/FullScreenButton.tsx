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
			<Tooltip className="p-2" label="Exit full-page">
				<IconArrowsMinimize
					onClick={close}
					className="h-6 w-6 cursor-pointer text-sky-900 transition-all hover:scale-125 hover:text-sky-700 active:scale-150"
				/>
			</Tooltip>
		)
	}

	return (
		<Tooltip className="p-2" label="View full-page">
			<IconArrowsMaximize
				onClick={open}
				className="h-6 w-6 cursor-pointer text-sky-900 transition-all hover:scale-125 hover:text-sky-700 active:scale-150"
			/>
		</Tooltip>
	)
}
