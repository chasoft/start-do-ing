/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/**************************************************************************
 *
 *  Last block (which is used for block #16)
 *
 *************************************************************************/

export const LAST_BLOCK: Block = {
  id: "last",
  icon: "/last-block.svg",
  title: "Last block",
  description: "Last block",
  to: "/dashboard",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-gray-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
