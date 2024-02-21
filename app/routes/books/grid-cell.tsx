/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridRight, CellIntro } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BOOKS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function BooksGridCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={BOOKS} upTo={BOOKS.to} blockIndex={blockIndex} />
}

export function BooksGridCell({
	className,
	isLastGridCellBlocksEmpty
}: {
	className?: string
	isLastGridCellBlocksEmpty: boolean
}) {
	return (
		<CellGridRight
			className={clsx(className)}
			isLastGridCellBlocksEmpty={isLastGridCellBlocksEmpty}
		/>
	)
}
