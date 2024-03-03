import { atomWithStorage } from "jotai/utils"

type RandomNumber = {
	values: number[]
	min: number
	max: number
}

export const randomNumberAtom = atomWithStorage<RandomNumber>("random.number", {
	values: [],
	min: 0,
	max: 100
})
