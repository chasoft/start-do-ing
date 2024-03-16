/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { FeedbackButton, FullScreenButton, HelpButton, SharingButton } from "."
import { useInit, useIsFullPage, useIsMobileWindowSize } from "~/utils"
import type { MarkdownString, UrlSharingData } from "~/utils/types"
import React from "react"

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
	const isFullScreen = useIsFullPage()
	const isMobileWindowSize = useIsMobileWindowSize()
	const isInitialized = useInit()
	const showButtons = isInitialized && (!isMobileWindowSize || isFullScreen)
	return (
		<>
			<div className="relative size-full rounded-lg bg-white/60 backdrop-blur-lg transition-all">
				{showButtons && (
					<div className="absolute right-1 top-1 z-[9999] flex gap-3 p-2">
						<HelpButton data={helpContents} />
						<FeedbackButton data={urlSharingData} />
						<SharingButton data={urlSharingData} />
						<FullScreenButton />
					</div>
				)}
				<div className={clsx("size-full", className)}>{children}</div>
			</div>
		</>
	)
}
