/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/**************************************************************************
 *
 * Side blocks
 * Could be used for ads / event's banners / featured content
 *
 *************************************************************************/

export const SIDE_BLOCKS: Block[] = [
  {
    id: "left",
    icon: "/left.svg",
    title: "Left block",
    description: "Left block",
    to: "/",
    tags: [],
    favorite: false,
    color: {
      text: "#000",
      primaryBg: "bg-red-300",
    },
    versioning: {
      releaseDate: new Date(),
      major: 0,
      minor: 1,
    },
  },
  {
    id: "right",
    icon: "/right.svg",
    title: "Right block",
    description: "Right block",
    to: "/",
    tags: [],
    favorite: false,
    color: {
      text: "#000",
      primaryBg: "bg-yellow-300",
    },
    versioning: {
      releaseDate: new Date(),
      major: 0,
      minor: 1,
    },
  },
];
