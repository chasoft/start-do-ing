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

export const MAGIC_WHEEL: Block = {
  id: "magic-wheel",
  icon: "/magic-wheel.svg",
  title: "Magic Wheel",
  description: "",
  to: "/magic-wheel",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-orange-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
