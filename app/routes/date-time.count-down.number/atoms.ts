import { atomWithStorage } from "jotai/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

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
		message: ""
	}
)
