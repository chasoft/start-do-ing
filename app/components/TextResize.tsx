/* FRAMEWORK */
import { useEffect, useRef } from "react"

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

type TextResizeProps = {
	className?: string
	children: React.ReactNode
}

const dynamicFontsizeVar = "--dynamic-font-size"
const parentPaddingTopVar = "--resize-layer-padding-top"
const standardFontSize = "1em"
const parentLayerClasses =
	"h-fit w-fit mt-[var(--resize-layer-padding-top)] text-[length:var(--dynamic-font-size)]"

export default function TextResize({ className, children }: TextResizeProps) {
	const resizeLayer = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const targetEl = resizeLayer.current ?? document.body
		const elObserver = new ResizeObserver((entries) => {
			const targetEl = entries[0].target as HTMLDivElement

			// Apply for the very first entry in the list only
			targetEl.style.setProperty(dynamicFontsizeVar, standardFontSize)

			const { width: max_width, height: max_height } =
				targetEl.parentElement?.getBoundingClientRect() ?? { width: 0, height: 0 }

			const { width, height } = targetEl.getBoundingClientRect()

			const sizeRatio = Math.min(max_width / width, max_height / height)

			targetEl.style.setProperty(dynamicFontsizeVar, sizeRatio + "em")

			targetEl.style.setProperty(
				parentPaddingTopVar,
				Math.floor((max_height - height * sizeRatio) / 4) + "px"
			)
		})

		elObserver.observe(targetEl)

		return () => {
			elObserver.unobserve(targetEl)
		}
	}, [])

	return (
		<div className={clsx("flex max-w-7xl justify-center", className)}>
			<div id="resizeLayer" ref={resizeLayer} className={parentLayerClasses}>
				{children}
			</div>
		</div>
	)
}
