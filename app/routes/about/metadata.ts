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

export const ABOUT: Block<"about"> = {
  id: "about",
  icon: "/about.svg",
  title: "About",
  description: "",
  to: "/about",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-red-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
