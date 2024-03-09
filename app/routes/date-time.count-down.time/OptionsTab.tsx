/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { useAtom } from "jotai"
import { CloseButton, Input, NumberInput, Switch, Textarea } from "@mantine/core"

/* COMPONENTS & UTILS */
import { toNumber } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { countdownTimeAtom } from "./atoms"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OptionsTab() {
	const [data, setData] = useAtom(countdownTimeAtom)
	const validateOptions = () => {
		/**
		 * startAt must be greater than 0-0-0
		 */
	}
	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-3 gap-4 rounded-lg border-2 border-slate-500 p-4 sm:rounded-2xl">
				<p>Target time</p>
				<Input
					placeholder="Name your time counter"
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
				<Textarea
					label="Message"
					description="The message you want to display after the countdown."
					placeholder="Input message"
					value={data.message}
					onChange={(e) => setData({ ...data, message: e.currentTarget.value })}
				/>
				<NumberInput
					label="Hours"
					value={data.tartgetTime.hours}
					onChange={(e) => {
						setData({ ...data, tartgetTime: { ...data.tartgetTime, hours: toNumber(e) } })
					}}
					min={0}
					max={undefined}
					onBlur={validateOptions}
				/>
				<NumberInput
					label="Minutes"
					value={data.tartgetTime.minutes}
					onChange={(e) => {
						setData({
							...data,
							tartgetTime: { ...data.tartgetTime, minutes: toNumber(e) }
						})
					}}
					min={0}
					max={59}
					onBlur={validateOptions}
				/>

				<NumberInput
					label="Seconds"
					value={data.tartgetTime.seconds}
					onChange={(e) => {
						setData({
							...data,
							tartgetTime: { ...data.tartgetTime, seconds: toNumber(e) }
						})
					}}
					min={0}
					max={59}
					onBlur={validateOptions}
				/>
			</div>
			<Switch
				checked={data.loop}
				label="Looping"
				onChange={(event) => setData({ ...data, loop: event.currentTarget.checked })}
			/>
		</div>
	)
}
