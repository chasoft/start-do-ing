/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { FullScreenButton, HelpButton, SharingButton } from "."
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"
import type { MarkdownString, UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ContentWrapper({
	urlSharingData,
	helpContents,
	children,
	className
}: {
	urlSharingData: UrlSharingData
	helpContents?: MarkdownString
	children: React.ReactNode
	className?: string
}) {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()

	return (
		<>
			<div
				className={clsx(
					"relative h-full w-full transition-all",
					"rounded-lg bg-white/60 backdrop-blur-lg",
					className
				)}
			>
				{(!isMobileWindowSize || isFullScreen) && (
					<div className="absolute right-1 top-1 z-[9999] flex gap-2 p-2">
						<HelpButton data={helpContents} />
						<SharingButton data={urlSharingData} />
						<FullScreenButton />
					</div>
				)}
				<div className="h-full w-full">{children}</div>
			</div>
		</>
	)
}
