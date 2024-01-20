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

export const ABOUT: Block = {
  id: "about",
  icon: "/about.svg",
  title: "About",
  description: "",
  to: "/about",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    bg: "bg-red-200",
    primaryBg: "bg-red-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
