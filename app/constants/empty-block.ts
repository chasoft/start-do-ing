/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const BLOCK_NOT_FOUND: LayoutId = "404";

export const EMPTY_BLOCK: Block = {
  id: "empty",
  icon: "/empty.svg",
  title: "Empty block",
  description: "Empty block",
  to: "/",
  tags: [],
  favorite: false,
  color: {
    text: "#000",
    bg: "bg-gray-200",
    primaryBg: "bg-gray-300",
  },
  versioning: {
    releaseDate: new Date(),
    major: 0,
    minor: 1,
  },
};
