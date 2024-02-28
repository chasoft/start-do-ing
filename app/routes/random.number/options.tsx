/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { NumberInput } from "@mantine/core";
import { useAtom } from "jotai";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { maxNumAtom, minNumAtom } from "./atoms";
import { toNumber } from "~/utils";

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OptionsTab() {
	const [minNum, setMinNum] = useAtom(minNumAtom)
	const [maxNum, setMaxNum] = useAtom(maxNumAtom)
	return (
		<div>
			<div className="flex gap-4">
				<NumberInput
					variant="filled"
					label="Min"
					placeholder="Input min value"
					value={minNum}
					max={maxNum}
					onChange={(e) => setMinNum(toNumber(e))}
				/>
				<div className="grid ">
					{[].map((num, idx) => <button key={idx}>{num}</button>)}

				</div>
			</div>
			<div>
				<NumberInput
					variant="filled"
					label="Max"
					placeholder="Input max value"
					value={maxNum}
					min={minNum}
					onChange={(e) => setMaxNum(toNumber(e))}
				/>
			</div>
		</div>
	)
}
