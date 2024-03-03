/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { useAtom } from "jotai"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { NumberInput } from "~/components/inputs"
import { randomNumberAtom } from "./atoms"
import { toNumber } from "~/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OptionsTab() {
	const [data, setData] = useAtom(randomNumberAtom)
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<NumberInput
				label="Min"
				value={data.min}
				onChange={(e) => {
					setData({ ...data, min: toNumber(e) })
				}}
				min={undefined}
				max={data.max}
			/>
			<NumberInput
				label="Max"
				value={data.max}
				onChange={(e) => {
					setData({ ...data, max: toNumber(e) })
				}}
				min={data.min}
				max={undefined}
			/>
		</div>
	)
}
