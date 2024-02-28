/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { maxNumAtom, minNumAtom } from "./atoms"
import { useAtomValue } from "jotai"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DisplayTab() {
	const minNum = useAtomValue(minNumAtom)
	const maxNum = useAtomValue(maxNumAtom)
	return (
		<div>
			min: {minNum} max: {maxNum}
		</div>
	)
}
