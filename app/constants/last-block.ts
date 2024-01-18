import type { Block } from "~/utils/types";

/**************************************************************************
 *
 *  Last block (which is used for block #16)
 *
 *************************************************************************/

export const LAST_BLOCK: Block = {
  id: "lastBlock",
  icon: "/last-block.svg",
  title: "Last block",
  description: "Last block",
  to: "/",
  tags: [],
  favorite: true,
  color: {
    text: "#000",
    bg: "bg-gray-200",
    primaryBg: "bg-gray-300",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
