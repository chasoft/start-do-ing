/* FRAMEWORK */
import { useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { IconArrowCollapse, IconArrowExpand, IconShare } from "./icons"
import type { UrlSharingData } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

function FullScreenButton() {
	const [searchParams, setSearchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"

	if (isFullScreen) {
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

function ShareButton({ data }: { data: UrlSharingData }) {
	const onClick = async () => {
		try {
			const response = await fetch(data.image);
			const blob = await response.blob();
			const file = new File([blob], `Math.random().toString(32).slice(2).jpg`, { type: blob.type });
			await navigator.share({
				url: data.url,
				title: data.title,
				text: data.description,
				files: [file]
			});
		} catch (e) {
			console.error(`Fail to share: ${e}`);
		}
	}

	if ('canShare' in navigator) {
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

export function ContentWrapper({ urlSharingData, children }: { urlSharingData: UrlSharingData, children: React.ReactNode }) {
	return (
		<div className="relative w-full h-full p-2 lg:p-4 rounded-lg">
			<div className="absolute top-0 right-0 sm:top-1 sm:right-1 flex">
				<ShareButton data={urlSharingData} />
				<FullScreenButton />
			</div>
			<div className="h-full w-full">
				{children}
			</div>
		</div>
	)
}