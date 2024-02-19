/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Text } from "@mantine/core"
import clsx from "clsx"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SUPPORT } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const sponsorText = `
Feeling grateful you used our tools to simplify your day! Did they save you valuable time or tackle a tricky task with ease? If so, consider buying me a coffee (or tea, smoothie, hot chocolate - your choice!) to fuel my mission of creating even more helpful tools. Every contribution, big or small, goes a long way in supporting this website and keeping it free for everyone to use.
`

const buyMeACoffee = [
	{ url: "https://me.momo.vn/blackCoffee", title: "Momo" },
	{ url: "https://paypal.me/chasoft", title: "Paypal" },
	{ url: "https://www.buymeacoffee.com/startdo.ing", title: "BuyMeACoffee" }
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
				<div className="grid grid-cols-2 xs:grid-cols-3 gap-3 my-4 xl:gap-5 w-full max-w-96">
					{buyMeACoffee.map((item, idx) => {
						return (
							<div
								key={idx}
								className="aspect-[1/1] flex justify-center items-center bg-gray-200 border border-gray-300 rounded-lg cursor-pointer place-content-center bg-opacity-40 hover:bg-opacity-70"
							>
								<Link to={item.url} target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-center items-center">
									<Text>Buy me</Text>
									<Text>a ☕️ via</Text>
									<Text className="font-semibold">{item.title}</Text>
								</Link>
							</div>
						)
					})}
				</div>
				<Text size="md">Thanks for being awesome! 🤟</Text>
			</motion.div>
		</ContentWrapper>
	)
}
