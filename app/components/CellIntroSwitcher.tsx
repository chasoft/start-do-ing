/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellIntroSwitcher({
	contentBlock,
	introBlock,
	isIntroBlock,
	className
}: {
	contentBlock: React.ReactNode
	introBlock: React.ReactNode
	isIntroBlock?: boolean
	className?: string
}) {
	if (isIntroBlock) {
		return <div className={clsx(className)}>{introBlock}</div>
	}
	return <div className={clsx(className)}>{contentBlock}</div>
}
