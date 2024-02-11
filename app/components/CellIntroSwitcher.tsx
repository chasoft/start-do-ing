import clsx from "clsx"

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
