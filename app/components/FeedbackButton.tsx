/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Modal, Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import { useIsMobileWindowSize, useToggleSearchParams } from "~/utils"
import type { UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMessageReport, IconXboxX } from "@tabler/icons-react"
import { SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function FeedbackButton({ data }: { data?: UrlSharingData }) {
	const isMobileWindowSize = useIsMobileWindowSize()
	const [showFeedbackDialog, { open, close }] = useToggleSearchParams({
		key: SPR.dialog.key,
		value: SPR.dialog.values.feedback
	})

	if (!data) return null
	return (
		<>
			<Tooltip className="p-2" label="Feedback">
				<IconMessageReport
					className="h-6 w-6 cursor-pointer text-yellow-900 transition-all hover:scale-125 hover:text-yellow-700 active:scale-150"
					onClick={open}
				/>
			</Tooltip>

			<Modal
				opened={showFeedbackDialog}
				onClose={close}
				title="Feedback"
				centered
				fullScreen={isMobileWindowSize}
				closeButtonProps={{
					icon: (
						<IconXboxX
							size={24}
							stroke={1.5}
							className="transition-transform hover:scale-125 active:scale-150"
						/>
					)
				}}
			>
				{/* TODO: Implement feedback dialog */}
				{JSON.stringify(data)}
			</Modal>
		</>
	)
}
