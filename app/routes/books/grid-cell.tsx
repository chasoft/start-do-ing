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

export function BooksGridCell({ className }: { className?: string }) {
	return <CellGridRight className={clsx(className)} />
}
