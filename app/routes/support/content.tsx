/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Image, ScrollArea, Text, Tooltip } from "@mantine/core"
import clsx from "clsx"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SUPPORT } from "./metadata"
import BankQRCode from "~/assets/momo_sponsor_link.jpg"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const sponsorText = `
Buying me a coffee *(or tea, smoothie, hot chocolate - your choice!)* to fuel my mission of creating even more **helpful tools**. Every contribution, **big or small**, goes a long way in supporting this website and keeping it **FREE** for everyone to use.
`

const buyMeACoffee = [
	{ url: "https://me.momo.vn/blackCoffee", title: "Momo", bgColor: "bg-blue-200" },
	{ url: "https://paypal.me/chasoft", title: "Paypal", bgColor: "bg-pink-200" },
	{
		url: "https://www.buymeacoffee.com/startdo.ing",
		title: "B.M.aCoffee",
		bgColor: "bg-rose-200"
	},
	{ url: "", title: "Bank-In-Vietnam", bgColor: "bg-green-200", img: BankQRCode }
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
				<ScrollArea className="h-[calc(100%-30px)]" offsetScrollbars>
					<Markdown className="max-w-3xl prose prose-base">{sponsorText}</Markdown>
					<div className="grid w-full max-w-lg grid-cols-2 gap-3 my-4 xs:grid-cols-4 xl:gap-5">
						{buyMeACoffee.map((item, idx) => {
							return (
								<div
									key={idx}
									className={clsx(
										"flex aspect-[1/1] cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-opacity-40 hover:bg-opacity-70 transition-all",
										item.bgColor
									)}
								>
									{item.url !== "" && (
										<a
											href={item.url}
											target="_blank"
											rel="noreferrer"
											className="flex flex-col items-center justify-center w-full h-full"
										>
											<Text>Buy me</Text>
											<Text>a ☕️ via</Text>
											<Text className="font-semibold">{item.title}</Text>
										</a>
									)}

									{!!item.img && (
										<Tooltip label="Bank Transfering">
											<Image
												src={item.img}
												className="object-cover w-full h-full p-1 transition-all hover:scale-150 hover:-translate-x-9 hover:-translate-y-9 md:hover:-translate-x-7 md:hover:-translate-y-7 lg:hover:-translate-x-6 lg:hover:-translate-y-6"
											/>
										</Tooltip>
									)}
								</div>
							)
						})}
					</div>
					<Text size="md" className="mb-10 lg:mb-0">
						Thanks for being awesome! 🤟
					</Text>
				</ScrollArea>
			</motion.div>
		</ContentWrapper>
	)
}
