/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { useIsFullscreen, useIsMobileWindowSize, useIsShowMobileButtons } from "~/utils";
import { FullScreenButton, SharingButton } from ".";
import type { UrlSharingData } from "~/utils/types";
import clsx from "clsx";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function ContentWrapper({ urlSharingData, children }: { urlSharingData: UrlSharingData, children: React.ReactNode }) {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()
	const isShowMobileButtons = useIsShowMobileButtons()

	return (
		<div
			className={clsx(
				"relative w-full h-full",
				{
					// "bg-opacity-100": isMobileWindowSize,
					"p-2 lg:p-4 bg-blue-200 bg-opacity-50 rounded-lg": !isMobileWindowSize
				}
			)}
		>
			{(!isShowMobileButtons || isFullScreen) &&
				<div className="absolute top-0 right-0 flex sm:top-1 sm:right-1">
					<SharingButton data={urlSharingData} />
					<FullScreenButton />
				</div>}
			<div className="w-full h-full">
				{children}
			</div>
		</div>
	)
}