import { atomWithStorage } from "jotai/utils"
import { MarkdownString } from "~/utils/types"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

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
