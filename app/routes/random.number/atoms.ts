import { atomWithStorage } from "jotai/utils";

export const minNumAtom = atomWithStorage<number>('random.number.minNum', 0)
export const maxNumAtom = atomWithStorage<number>('random.number.maxNum', 100)
