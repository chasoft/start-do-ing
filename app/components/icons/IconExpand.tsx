// icon:expand | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

export function IconExpand(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
			/>
		</svg>
	);
}
