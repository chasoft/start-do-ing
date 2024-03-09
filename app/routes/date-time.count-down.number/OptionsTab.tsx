/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { CloseButton, Input, NumberInput, Switch, Textarea } from "@mantine/core"
import { useAtom } from "jotai"

/* COMPONENTS & UTILS */
import { toNumber } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { countdownNumberAtom } from "./atoms"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

// const presets = [
// 	{ min: 0, max: 20 },
// 	{ min: 0, max: 50 },
// 	{ min: 0, max: 100 },
// 	{ min: 0, max: 1000 },
// 	{ min: 50, max: 100 },
// 	{ min: 100, max: 200 }
// ]

export function OptionsTab() {
	const [data, setData] = useAtom(countdownNumberAtom)
	/**
	 * Check warning if startAt === stopAt
	 */
	return (
		<div className="grid grid-cols-1 gap-4 rounded-lg border-2 border-slate-500 p-4 sm:grid-cols-2 sm:rounded-2xl">
			<Input.Wrapper label="Counter Name" description="Name of your counter">
				<Input
					placeholder="Name your number counter"
					value={data.name}
					onChange={(event) => setData({ ...data, name: event.currentTarget.value })}
					rightSectionPointerEvents="all"
					mt="md"
					rightSection={
						<CloseButton
							aria-label="Clear input"
							onClick={() => setData({ ...data, name: "" })}
							style={{ display: data.name ? undefined : "none" }}
						/>
					}
				/>
			</Input.Wrapper>
			<Textarea
				label="Message"
				description="The message you want to display after the countdown."
				placeholder="Input message"
				value={data.message}
				onChange={(e) => setData({ ...data, message: e.currentTarget.value })}
			/>
			<NumberInput
				label="Start at"
				value={data.startAt}
				onChange={(e) => {
					setData({ ...data, startAt: toNumber(e) })
				}}
			/>
			<NumberInput
				label="Stop at"
				value={data.stopAt}
				onChange={(e) => {
					setData({ ...data, stopAt: toNumber(e) })
				}}
			/>
			<Switch
				checked={data.loop}
				label="Looping"
				onChange={(event) => setData({ ...data, loop: event.currentTarget.checked })}
			/>
		</div>
	)
}
