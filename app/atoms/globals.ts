import { atom } from "jotai";
import { DYNAMIC_BLOCKS } from "~/constants/common";

export const layoutsAtom = atom([...DYNAMIC_BLOCKS]);

export const layoutsPropsAtom = atom((get) =>
  get(layoutsAtom).map((layout) => ({
    bgColor: layout.color.bg,
    layoutId: layout.id,
  }))
);
