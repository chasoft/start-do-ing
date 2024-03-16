/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconArrowBackUp } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function GoUpLink({ upTo }: { upTo: string }) {
	return (
		<Link to={upTo}>
			<IconArrowBackUp className="size-6 transition-all hover:scale-125 active:scale-110 active:text-blue-900" />
		</Link>
	)
}
