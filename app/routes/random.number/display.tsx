/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { ScrollArea } from "@mantine/core"
import { useAtom } from "jotai"
import clsx from "clsx"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { randomNumberAtom } from "./atoms"
import TextResize from "~/components/TextResize"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DisplayTab() {
	const [data, setData] = useAtom(randomNumberAtom)
	const currentValue = data.values[0] ?? "..."
	const hasHistory = data.values.length > 0
	return (
		<div className="flex h-full flex-col sm:flex-row">
			<div className="relative flex h-full flex-col justify-center rounded-2xl border-2 border-slate-500 p-4 pt-2 sm:w-1/2">
				<div className="absolute left-2 top-2">
					Random number from <span className="font-bold">{data.min}</span> to{" "}
					<span className="font-bold">{data.max}</span>
				</div>
				<div className="flex grow items-center justify-center p-8 text-center text-9xl font-bold">
					<TextResize>{currentValue}</TextResize>
				</div>
				<button
					className="btn btn-outline w-full dark:text-slate-600"
					onClick={() => {
						const nextNum = Math.floor(Math.random() * (data.max - data.min) + data.min)
						setData({ ...data, values: [nextNum, ...data.values] })
					}}
				>
					Generate new number
				</button>
			</div>
			<div className="flex h-full flex-col px-8 py-4 sm:w-1/2">
				<div className="flex items-center font-semibold">
					<span>Latest numbers</span>
					<button
						className={clsx("btn btn-ghost btn-xs  ml-auto hover:text-blue-500", {
							hidden: !hasHistory
						})}
						onClick={() => setData({ ...data, values: [] })}
					>
						Clean up
					</button>
				</div>
				{/* TODO: remove fixed height and make it auto fit the remaining space */}
				<div className="h-[200px] sm:h-[calc(100%-20px)]">
					<ScrollArea className="h-full">
						{hasHistory ? (
							<ol
								className="flex list-inside list-decimal flex-wrap gap-2 py-4 text-xl"
								reversed
							>
								{data.values.slice(0).map((number, idx) => (
									<li key={idx} className="grow">
										<span className="pl-2 pr-4 font-bold">{number}</span>
									</li>
								))}
							</ol>
						) : (
							<div>History is empty</div>
						)}
					</ScrollArea>
				</div>
			</div>
		</div>
	)
}
