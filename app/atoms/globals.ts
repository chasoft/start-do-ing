import { atom } from "jotai";
import { layoutIdList } from "~/data/constants";

export const inactiveLayoutIdListAtom = atom([...layoutIdList]);
