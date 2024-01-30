/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, MathsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const MATHS_EMPTY_1: Block<MathsLayoutId> = {
  id: "maths-empty-1",
  icon: "/maths-empty-1.svg",
  title: "Maths Empty 1",
  description: "Fast maths for kids 1",
  to: "/maths/empty-1",
  group: [],
  favorite: false,
  color: {
    text: "#000",
    primaryBg: "bg-rose-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
