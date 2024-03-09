import { Release } from "~/utils/types"

/***************************************************************************
 *
 *  Update records moved to separated file for better maintenance
 *
 **************************************************************************/

export const DATE_TIME_COUNT_DOWN_NUMBER_UPDATES: Array<Release> = [
	{
		date: new Date(2024, 2, 9).getTime(),
		codeName: "date-time.count-down.number",
		description: "Initial release",
		version: "1.0.0"
	}
]
