/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Button, Image, Popover, ScrollArea, Text, Tooltip } from "@mantine/core"
import { motion } from "framer-motion"
import { useDisclosure } from "@mantine/hooks"
import clsx from "clsx"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconBuildingBank, IconHeart } from "@tabler/icons-react"
import { SUPPORT } from "./metadata"
import logoBmc from "~/assets/logo-bmc.svg"
import logoMomo from "~/assets/logo-momo.svg"
import logoPaypal from "~/assets/logo-paypal.svg"
import vietnamBankTransferring from "~/assets/logo-vietnam-bank-transferring.jpg"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const sponsorText = `
Every contribution, **big or small**, goes a long way in supporting this website and keeping it **FREE** for everyone to use. Buying me a coffee *(or tea, smoothie, hot chocolate - your choice!)* to fuel my mission of creating even more **helpful tools**.`

const buyMeCoffee = [
	{
		url: "https://me.momo.vn/blackCoffee",
		title: "Momo",
		img: logoMomo,
		bgColor: "bg-pink-100"
	},
	{
		url: "https://paypal.me/chasoft",
		title: "Paypal",
		img: logoPaypal,
		bgColor: "bg-blue-100"
	},
	{
		url: "https://www.buymeacoffee.com/startdo.ing",
		title: "B.M.aCoffee",
		img: logoBmc,
		bgColor: "bg-yellow-100"
	}
]

const bankTransferring = {
	url: "https://me.momo.vn/blackCoffee",
	title: "Vietnam Bank Transfering",
	bgColor: "bg-green-200",
	img: vietnamBankTransferring
}

function BankIcon() {
	const [opened, { close, open }] = useDisclosure(false)
	return (
		<Popover width={300} position="top" withArrow shadow="md" opened={opened}>
			<Popover.Target>
				<Button
					onMouseEnter={open}
					onMouseLeave={close}
					variant="transparent"
					className="w-12 h-12 p-1 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-slate-100 hover:-translate-y-1"
				>
					<IconBuildingBank size={48} />
				</Button>
			</Popover.Target>
			<Popover.Dropdown className="p-0 rounded-lg cursor-none">
				<Image src={bankTransferring.img} />
			</Popover.Dropdown>
		</Popover>
	)
}

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
				<h1 className="flex items-center gap-2 mb-4 text-lg font-semibold sm:text-2xl">
					<IconHeart size={24} className="fill-red-400" />
					<span>Support my work</span>
				</h1>
				<ScrollArea className="h-[calc(100%-30px)]" offsetScrollbars>
					<Markdown className="max-w-3xl prose prose-base">{sponsorText}</Markdown>
					<div className="flex flex-wrap gap-6 lg:gap-3 my-6 max-w-[768px] w-full justify-center">
						{buyMeCoffee.map((item, idx) => {
							return (
								<Link
									key={idx}
									to={item.url}
									target="_blank"
									rel="noreferrer"
									className="transition-all duration-200 hover:-translate-y-1"
								>
									<Image
										className={clsx("rounded-lg h-12", item.bgColor)}
										src={item.img}
									/>
								</Link>
							)
						})}
						<Tooltip label={bankTransferring.title}>
							<BankIcon />
						</Tooltip>
					</div>
					<Text size="md" className="mb-10 lg:mb-0">
						Thanks for being awesome! 🤟
					</Text>
				</ScrollArea>
			</motion.div>
		</ContentWrapper>
	)
}
