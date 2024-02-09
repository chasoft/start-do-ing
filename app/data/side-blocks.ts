/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, FeatureLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/**************************************************************************
 *
 * Side blocks
 * Could be used for ads / event's banners / featured content
 *
 *************************************************************************/

export const SIDE_BLOCKS: Block<FeatureLayoutId>[] = [
  {
    id: "left",
    icon: undefined,
    title: "Left block",
    description: "Left block",
    to: "/",
    group: [],
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
    icon: undefined,
    title: "Right block",
    description: "Right block",
    to: "/",
    group: [],
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
