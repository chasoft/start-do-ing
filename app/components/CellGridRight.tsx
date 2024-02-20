/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Badge, Image, ScrollArea, Text } from "@mantine/core"
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, GRAY, SIDE_BLOCKS } from "~/data"
import { URLS } from "~/data/urls"
import bc1 from "~/assets/books/book-cover-1.png"
import bc2 from "~/assets/books/book-cover-2.png"
import bc3 from "~/assets/books/book-cover-3.png"
import bc4 from "~/assets/books/book-cover-4.png"
import bc5 from "~/assets/books/book-cover-5.png"
import bc6 from "~/assets/books/book-cover-6.png"
import bc7 from "~/assets/books/book-cover-7.png"
import bc8 from "~/assets/books/book-cover-8.png"
import bc9 from "~/assets/books/book-cover-9.png"
import bc10 from "~/assets/books/book-cover-10.png"
import bc11 from "~/assets/books/book-cover-11.png"
import bc12 from "~/assets/books/book-cover-12.png"
import bc13 from "~/assets/books/book-cover-13.png"
import bc14 from "~/assets/books/book-cover-14.png"
import bc15 from "~/assets/books/book-cover-15.png"
import bc16 from "~/assets/books/book-cover-16.png"
import bc17 from "~/assets/books/book-cover-17.png"
import bc18 from "~/assets/books/book-cover-18.png"
import bc19 from "~/assets/books/book-cover-19.png"
import bc20 from "~/assets/books/book-cover-20.png"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const books = [
	bc1,
	bc2,
	bc3,
	bc4,
	bc5,
	bc6,
	bc7,
	bc8,
	bc9,
	bc10,
	bc11,
	bc12,
	bc13,
	bc14,
	bc15,
	bc16,
	bc17,
	bc18,
	bc19,
	bc20
]

export function CellGridRight({ className }: { className?: string }) {
	const Icon = getIcon(SIDE_BLOCKS.RIGHT.icon?.data)
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SIDE_BLOCKS.RIGHT.id}>
			<div
				className={clsx(
					"block h-full rounded-lg bg-opacity-60 hover:bg-opacity-70 border-2 transition-all",
					GRAY.bgColor,
					GRAY.borderColor
				)}
			>
				<div className="flex flex-col h-full p-2 overflow-hidden">
					<h2 className="flex items-start gap-2">
						<Link to={URLS.books.to} className="flex gap-2 hover:text-blue-600">
							{SIDE_BLOCKS.RIGHT.icon && <Icon size={24} className="mt-[2px]" />}{" "}
							<Text size="lg" fw={FW.SEMI_BOLD}>
								{SIDE_BLOCKS.RIGHT.title}
							</Text>
						</Link>
					</h2>
					<div className="flex flex-col">
						<Text size="md" lineClamp={3}>
							Explore worlds of code, logic, and thought.
						</Text>
					</div>
					<ScrollArea className="grow">
						<div className="grid w-full grid-cols-3 gap-2 mt-2">
							{books.map((book, idx) => (
								<div key={idx} className="relative group">
									<Image
										src={book}
										className="border border-transparent rounded-md cursor-pointer hover:border-blue-400"
									/>
									<Badge
										size="md"
										circle
										className="absolute items-center justify-center hidden transition-all group-hover:flex top-2 left-2"
									>
										{idx}
									</Badge>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</motion.div>
	)
}
