import { atomWithStorage } from "jotai/utils"
import { MarkdownString } from "~/utils/types"

type CountdownNumber = {
	startAt: number
	stopAt: number
	step: number
	loop: boolean
	cycle: number
	name: string
	message: string
}

export const countdownNumberAtom = atomWithStorage<CountdownNumber>(
	"datetime.countdown.number",
	{
		startAt: 100,
		stopAt: 0,
		step: -1,
		loop: false,
		cycle: 0,
		name: "",
		message: "Time is up!"
	}
)

type CountdownTime = {
	tartgetTime: {
		seconds: number
		minutes: number
		hours: number
	}
	loop: boolean
	cycle: number
	name: string
	message: string
}

export const countdownTimeAtom = atomWithStorage<CountdownTime>(
	"datetime.countdown.time",
	{
		tartgetTime: {
			seconds: 0,
			minutes: 0,
			hours: 0
		},
		loop: false,
		cycle: 0,
		name: "",
		message: "Time is up!"
	}
)

type CountdownDate = {
	targetDate: Date
	name: string
	message: MarkdownString
}

export const countdownDateAtom = atomWithStorage<CountdownDate>(
	"datetime.countdown.Date",
	{
		targetDate: new Date("08/03/2024"),
		name: "International Woman Day",
		message: "Ngày Quốc Tế Phụ Nữ"
	}
)
