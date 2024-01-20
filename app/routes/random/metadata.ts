/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const RANDOM_LAYOUT: Block = {
  id: "random",
  icon: "/random.svg",
  title: "Random",
  description: "",
  to: "/random",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    bg: "bg-green-200",
    primaryBg: "bg-green-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
