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

export const KAHOOT: Block = {
  id: "kahoot",
  icon: "/kahoot.svg",
  title: "Kahoot",
  description: "",
  to: "/kahoot",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
