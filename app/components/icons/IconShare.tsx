// icon:share-2 | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react"

export function IconShare(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M21 5 A3 3 0 0 1 18 8 A3 3 0 0 1 15 5 A3 3 0 0 1 21 5 z" />
			<path d="M9 12 A3 3 0 0 1 6 15 A3 3 0 0 1 3 12 A3 3 0 0 1 9 12 z" />
			<path d="M21 19 A3 3 0 0 1 18 22 A3 3 0 0 1 15 19 A3 3 0 0 1 21 19 z" />
			<path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
		</svg>
	)
}
