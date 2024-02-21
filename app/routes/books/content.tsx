/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea, Text } from "@mantine/core"
import clsx from "clsx"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BOOKS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const booksIntro = `hello **w**orld`

export function BooksFeature({
	className,
	layoutId
}: {
	className?: string
	layoutId: string
}) {
	const urlSharingData = useUrlSharingData(BOOKS)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div
				className={clsx("h-full p-2 sm:p-4 xl:p-6", className)}
				layoutId={layoutId}
			>
				<h1 className="mb-4 text-lg font-semibold sm:text-2xl">{BOOKS.title}</h1>
				<ScrollArea className="h-[calc(100%-30px)]" offsetScrollbars>
					<Markdown className="prose prose-base max-w-3xl">{booksIntro}</Markdown>
					<div className="my-4 grid w-full max-w-lg grid-cols-2 gap-3 xs:grid-cols-4 xl:gap-5">
						Books for life
					</div>
					<Text size="md" className="mb-10 lg:mb-0">
						Thanks for being awesome! 🤟
					</Text>
				</ScrollArea>
			</motion.div>
		</ContentWrapper>
	)
}
