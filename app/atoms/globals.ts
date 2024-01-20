/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { atom } from "jotai";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DYNAMIC_BLOCKS } from "~/constants/common";

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const layoutsAtom = atom([...DYNAMIC_BLOCKS]);

export const layoutsPropsAtom = atom((get) =>
  get(layoutsAtom).map(({ id }) => id)
);
