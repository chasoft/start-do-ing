/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Tooltip } from "@mantine/core"

/* COMPONENTS & UTILS */
import type { UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconShare } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function SharingButton({ data }: { data?: UrlSharingData }) {
	if (!data) return null

	const onClick = async () => {
		try {
			const response = await fetch(data.image)
			const blob = await response.blob()
			const file = new File([blob], `${Math.random().toString(32).slice(2)}.jpg`, {
				type: blob.type
			})
			await navigator.share({
				url: data.url,
				title: data.title,
				text: data.description,
				files: [file]
			})
		} catch (e) {
			console.error(`Fail to share: ${e}`)
		}
	}

	if ("canShare" in navigator) {
		return (
			<Tooltip className="p-2" label="Share with...">
				<IconShare
					className="h-6 w-6 cursor-pointer text-green-900 transition-all hover:scale-125 hover:text-green-700 active:scale-150"
					onClick={onClick}
				/>
			</Tooltip>
		)
	}

	return null
}
