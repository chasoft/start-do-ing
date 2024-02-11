/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { IconArrowBackUp } from "@tabler/icons-react"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function GoUpLink({ upTo }: { upTo: string }) {
	return (
		<Link to={upTo}>
			<IconArrowBackUp className="w-6 h-6 transition-all hover:scale-125 active:text-blue-900 active:scale-110" />
		</Link>
	)
}
