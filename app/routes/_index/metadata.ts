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

export const HOME: Block<"home"> = {
  id: "home",
  icon: "/home.svg",
  title: "Home",
  description: "",
  to: "/",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-pink-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};