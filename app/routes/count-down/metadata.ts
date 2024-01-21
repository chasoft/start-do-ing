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

export const COUNT_DOWN: Block = {
  id: "count-down",
  icon: "/count-down.svg",
  title: "Count down",
  description: "",
  to: "/count-down",
  tags: [],
  favorite: false,
  color: {
    text: "#000",
    primaryBg: "bg-blue-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
