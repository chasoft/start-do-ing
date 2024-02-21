/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Badge, Image, ScrollArea, Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, GRAY, SIDE_BLOCKS, SITE } from "~/data"
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

//TODO: Fix CSS layout, why cannot use `flex flex-col` and then the first cell use `grow`
export function CellGridRight({
	className,
	isLastGridCellBlocksEmpty
}: {
	className?: string
	isLastGridCellBlocksEmpty: boolean
}) {
	const Icon = getIcon(SIDE_BLOCKS.RIGHT.icon?.data)
	return (
		<div className={clsx("h-full flex-col border-red-600", className)}>
			<div
				className={clsx(
					"rounded-lg border-2 bg-opacity-60 transition-all hover:bg-opacity-70",
					GRAY.bgColor,
					GRAY.borderColor,
					isLastGridCellBlocksEmpty ? "h-[calc(100%-30px)]" : "h-full"
				)}
			>
				<div className="flex h-full flex-col overflow-hidden p-2">
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
						<div className="mt-2 grid w-full grid-cols-3 gap-2">
							{books.map((book, idx) => (
								<div key={idx} className="group relative">
									<Image
										src={book}
										className="cursor-pointer rounded-md border border-transparent hover:border-blue-400"
									/>
									<Badge
										size="md"
										circle
										className="absolute left-1 top-1 hidden items-center justify-center transition-all group-hover:flex xl:left-2 xl:top-2"
									>
										{idx}
									</Badge>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
			{isLastGridCellBlocksEmpty && (
				<div className="flex h-full w-full items-end justify-center text-xs hover:fill-blue-500 hover:text-blue-500">
					<Link to={URLS.support.to}>{SITE.makeWithLove}</Link>
				</div>
			)}
		</div>
	)
}
