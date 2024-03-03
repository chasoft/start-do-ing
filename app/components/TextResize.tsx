import React from "react"

type TextResizeProps = {
	children: React.ReactNode
}
export default function TextResize({ children }: TextResizeProps) {
	const resizeLayer = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const targetEl = resizeLayer.current ?? document.body
		const elObserver = new ResizeObserver((entries) => {
			// Apply for the very first entry in the list only
			;(entries[0].target as HTMLDivElement).style.setProperty(
				"--random-word-font-size",
				"1em"
			)

			const { width: max_width, height: max_height } =
				entries[0].target.parentElement?.getBoundingClientRect() ?? {
					width: 0,
					height: 0
				}

			const { width, height } = entries[0].target.getBoundingClientRect()

			const sizeRatio = Math.min(max_width / width, max_height / height)

			;(entries[0].target as HTMLDivElement).style.setProperty(
				"--random-word-font-size",
				sizeRatio + "em"
			)
			;(entries[0].target as HTMLDivElement).style.setProperty(
				"--resize-layer-padding-top",
				Math.floor((max_height - height * sizeRatio) / 4) + "px"
			)
		})
		elObserver.observe(targetEl)
		return () => {
			elObserver.unobserve(targetEl)
		}
	}, [])

	return (
		<div className="flex h-full w-full max-w-7xl justify-center">
			<div
				id="resizeLayer"
				ref={resizeLayer}
				className="mt-[var(--resize-layer-padding-top)] h-fit w-fit text-[length:var(--random-word-font-size)]"
			>
				{children}
			</div>
		</div>
	)
}
