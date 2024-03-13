/* FRAMEWORK */
import { useEffect, useRef, useState } from "react"

/* THIRD-PARTY PACKAGES */
import { ActionIcon, Button } from "@mantine/core"
import { motion } from "framer-motion"
import { useAtomValue } from "jotai"
import { useInterval } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { useInit } from "~/utils"
import TextResize from "~/components/TextResize"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { countdownNumberAtom } from "./atoms"
import { IconRefresh } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const startBtnLabel = {
	start: "Start",
	"start-over": "Start Over",
	pause: "Pause",
	resume: "Resume"
}

export function CountdownNumberTab() {
	const init = useInit()
	const data = useAtomValue(countdownNumberAtom)
	const [currentCountValue, setCurrentCountValue] = useState(data.startAt)
	const startBtnRef = useRef<HTMLButtonElement>(null)

	const { start, stop, active } = useInterval(() => {
		setCurrentCountValue((counter) => {
			if (counter === data.stopAt) {
				stop()
				return counter
			}
			if (data.startAt < data.stopAt) return counter + 1
			if (data.startAt > data.stopAt) return counter - 1
			return counter
		})
	}, 1000)

	const statusCode =
		currentCountValue === data.startAt && !active
			? "start"
			: currentCountValue === data.stopAt
				? "start-over"
				: active
					? "pause"
					: "resume"

	const disableResetButton = statusCode !== "resume"
	const hasEndingMessage = data.name !== "" || data.message !== ""
	const showEndingMessage = statusCode === "start-over" && hasEndingMessage

	const onStartBtnClick = () => {
		switch (statusCode) {
			case "start":
			case "resume":
				start()
				break
			case "start-over":
				setCurrentCountValue(data.startAt)
				start()
				break
			case "pause":
				stop()
				break
			default:
				break
		}
	}

	const onResetBtnClick = () => {
		stop()
		setCurrentCountValue(data.startAt)
		startBtnRef.current?.focus()
	}

	useEffect(() => {
		if (!init) return
		setCurrentCountValue(data.startAt)
		startBtnRef.current?.focus()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [init])

	return (
		<div className="flex h-full flex-col">
			<TextResize
				className={clsx("relative w-full grow font-semibold transition-all", {
					"scale-90 text-transparent/40": showEndingMessage
				})}
			>
				{currentCountValue}
			</TextResize>
			{showEndingMessage && (
				<motion.div
					className="absolute left-[5%] top-[20%] flex h-[70%] w-[90%] flex-col"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
				>
					{data.name && (
						<TextResize className="h-[40%] w-full font-semibold">{data.name}</TextResize>
					)}
					{data.message && (
						<TextResize className="h-[30%] w-full font-semibold">
							{data.message}
						</TextResize>
					)}
				</motion.div>
			)}
			<div className="flex items-center gap-2">
				<Button
					ref={startBtnRef}
					onClick={onStartBtnClick}
					className="grow"
					variant="outline"
				>
					{startBtnLabel[statusCode]}
				</Button>
				<ActionIcon
					disabled={disableResetButton}
					variant="filled"
					aria-label="Reset"
					onClick={onResetBtnClick}
				>
					<IconRefresh />
				</ActionIcon>
			</div>
		</div>
	)
}
