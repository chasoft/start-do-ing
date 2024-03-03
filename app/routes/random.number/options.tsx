/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { useAtom } from "jotai"
import clsx from "clsx"

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

const presets = [
	{ min: 0, max: 20 },
	{ min: 0, max: 50 },
	{ min: 0, max: 100 },
	{ min: 0, max: 1000 },
	{ min: 50, max: 100 },
	{ min: 100, max: 200 }
]

export function OptionsTab() {
	const [data, setData] = useAtom(randomNumberAtom)
	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-1 gap-4 rounded-lg border-2 border-slate-500 p-4 sm:grid-cols-2 sm:rounded-2xl">
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
			<div>
				<p>Presets</p>
				<div className="flex flex-wrap gap-2">
					{presets.map((preset, idx) => {
						const onClick = () => {
							setData({ ...data, min: preset.min, max: preset.max })
						}
						return (
							<div
								role="button"
								key={idx}
								tabIndex={0}
								onClick={onClick}
								onKeyDown={onClick}
								className={clsx("btn btn-outline", {
									"bg-slate-200": preset.min === data.min && preset.max === data.max
								})}
							>
								{`${preset.min} - ${preset.max}`}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
