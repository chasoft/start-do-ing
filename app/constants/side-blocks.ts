import type { Block } from "~/utils/types";

/**************************************************************************
 *
 * Side blocks
 * Could be used for ads or event's banners
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
      bg: "bg-red-200",
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
      bg: "bg-yellow-200",
      primaryBg: "bg-yellow-300",
    },
    versioning: {
      releaseDate: new Date(),
      major: 0,
      minor: 1,
    },
  },
];

export const SIDE_BLOCKS_PROPS = SIDE_BLOCKS.map((block) => ({
  bgColor: block.color.bg,
  layoutId: block.id,
}));
