import { atomWithStorage } from "jotai/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

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
