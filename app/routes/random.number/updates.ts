import { Release } from "~/utils/types"

/***************************************************************************
 *
 *  Update records moved to separated file for better maintenance
 *
 **************************************************************************/

export const RANDOM_NUMBER_UPDATES: Array<Release> = [
	{
		date: new Date(2024, 2, 2).getTime(),
		codeName: "random.number",
		description: "Initial release",
		version: "1.0.0"
	}
]
