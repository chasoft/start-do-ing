/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SUPPORT } from "./metadata"
import { Text } from "@mantine/core"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const sponsorText = `
Feeling grateful you used our tools to simplify your day! Did they save you valuable time or tackle a tricky task with ease? If so, consider buying me a coffee (or tea, smoothie, hot chocolate - your choice!) to fuel my mission of creating even more helpful tools. Every contribution, big or small, goes a long way in supporting this website and keeping it free for everyone to use.
`

const buyMeACoffee = [
	{ data: "https://www.buymeacoffee.com/chasoft", label: "Buy me a coffee" },
	{ data: "https://www.buymeacoffee.com/chasoft", label: "Buy me a coffee" },
	{ data: "https://www.buymeacoffee.com/chasoft", label: "Buy me a coffee" }
]

export function SupportFeature({
	className,
	layoutId
}: {
	className?: string
	layoutId: string
}) {
	const urlSharingData = useUrlSharingData(SUPPORT)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div
				className={clsx("h-full p-2 sm:p-4 xl:p-6", className)}
				layoutId={layoutId}
			>
				<h1 className="mb-4 text-lg font-semibold sm:text-2xl">Support my work</h1>
				<Markdown className="max-w-3xl prose prose-base">{sponsorText}</Markdown>
				<div className="flex gap-3 my-4 xl:gap-6">
					{buyMeACoffee.map((item, idx) => {
						return (
							<div
								key={idx}
								className="grid bg-gray-200 border border-gray-300 rounded-lg cursor-pointer aspect-1 place-content-center bg-opacity-40 hover:bg-opacity-60"
							>
								{item.label}
							</div>
						)
					})}
				</div>
				<Text size="md">Thanks for being awesome! ☕️</Text>
			</motion.div>
		</ContentWrapper>
	)
}
