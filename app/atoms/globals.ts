import { atom } from "jotai";
import { dynamicBlocks } from "~/data/constants";

export const layoutsAtom = atom([...dynamicBlocks]);

export const layoutsPropsAtom = atom((get) =>
  get(layoutsAtom).map((layout) => ({
    bgColor: layout.color.bg,
    layoutId: layout.id,
  }))
);
