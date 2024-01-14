import { atom } from "jotai";
import { BLOCKS } from "~/data/constants";

export const layoutsAtom = atom([...BLOCKS]);

export const layoutsPropsAtom = atom((get) =>
  get(layoutsAtom).map((layout) => ({
    bgColor: layout.color.bg,
    layoutId: layout.id,
  }))
);
