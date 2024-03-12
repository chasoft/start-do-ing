/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { CloseButton, Input, NumberInput } from "@mantine/core"
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

export function OptionsTab() {
	const [data, setData] = useAtom(countdownNumberAtom)
	const errorMessage =
		data.startAt === data.stopAt ? "Start At and Stop At must be different" : ""
	return (
		<div className="grid grid-cols-1 gap-4 rounded-lg border-2 border-slate-500 p-4 sm:grid-cols-2 sm:rounded-2xl">
			<Input.Wrapper label="Counter Name" description="Name of your number counter">
				<Input
					placeholder="Enter name of your number counter"
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
			<Input.Wrapper label="Ending Message" description="Message of your number counter">
				<Input
					placeholder="Enter message of your number counter"
					value={data.message}
					onChange={(event) => setData({ ...data, message: event.currentTarget.value })}
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
			<NumberInput
				label="Start at"
				value={data.startAt}
				onChange={(e) => {
					setData({ ...data, startAt: toNumber(e) })
				}}
				error={errorMessage}
			/>
			<NumberInput
				label="Stop at"
				value={data.stopAt}
				onChange={(e) => {
					setData({ ...data, stopAt: toNumber(e) })
				}}
				error={errorMessage}
			/>
		</div>
	)
}
