/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconShare } from "./icons"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function SharingButton({ data }: { data: UrlSharingData }) {
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
			<div className="p-2">
				<IconShare
					className="w-6 h-6 text-gray-700 transition-all cursor-pointer hover:scale-125 active:scale-150"
					onClick={onClick}
				/>
			</div>
		)
	}

	return null
}
