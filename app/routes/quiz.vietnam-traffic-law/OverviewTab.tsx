/* FRAMEWORK */

import Markdown from "react-markdown"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const intro = `General **information** about the Vietnam Traffic Laws`

export function OverviewTab() {
	return (
		<div className="">
			<Markdown>{intro}</Markdown>
		</div>
	)
}
