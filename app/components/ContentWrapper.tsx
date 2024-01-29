/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { IconExpand } from "./icons"
import type { UrlSharingData } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { SITE } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

function FullScreenButton() {
	const url = new URL(typeof window !== "undefined" ? window.location.href : SITE.url)
	url.searchParams.set("full", "true")
	const fullUrl = url.href;
	return (
		<Link to={fullUrl} className="absolute top-2 right-2 sm:top-3 sm:right-3">
			<IconExpand className="w-6 h-6 text-gray-700 transition-all cursor-pointer hover:scale-125 active:scale-150" />
		</Link>
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

	// if ('canShare' in navigator) {
	return (
		<div className="absolute top-2 right-2 sm:top-3 sm:right-3">
			<IconExpand
				className="w-6 h-6 text-gray-700 transition-all cursor-pointer hover:scale-125 active:scale-150"
				onClick={onClick}
			/>
		</div>
	)
	// }

	// return null
}

export function ContentWrapper({ urlSharingData, children }: { urlSharingData: UrlSharingData, children: React.ReactNode }) {
	return (
		<div className="relative w-full h-full p-2 rounded-lg">
			<div className="flex">
				<FullScreenButton />
				<ShareButton data={urlSharingData} />
			</div>
			{children}
		</div>
	)
}