/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Modal, Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import { useToggleSearchParams } from "~/utils"
import type { UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMessageReport } from "@tabler/icons-react"
import { SPR } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
//BUG: Feedback dialog not showed
export function FeedbackButton({ data }: { data?: UrlSharingData }) {
	const [showFeedbackDialog, { open, close }] = useToggleSearchParams({
		key: SPR.dialog.key,
		value: SPR.dialog.values.feedback
	})

	if (!data) return null
	return (
		<>
			<Tooltip className="p-2" label="Feedback">
				<IconMessageReport
					className="h-6 w-6 cursor-pointer text-gray-700 transition-all hover:scale-125 active:scale-150"
					onClick={open}
				/>
			</Tooltip>

			<Modal opened={showFeedbackDialog} onClose={close} title="Feedback" centered>
				{JSON.stringify(data)}
			</Modal>
		</>
	)
}
