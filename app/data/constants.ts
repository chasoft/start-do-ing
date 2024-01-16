import { Block, Breakpoint, LayoutId } from "~/utils";

export const emptyId: LayoutId = "404";

export const breakpoints: Breakpoint[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
];

/**************************************************************************
 *
 *     Dynamic blocks
 *
 *************************************************************************/

export const dynamicBlocks: Block[] = [
  {
    id: "home",
    description: "",
    color: {
      text: "#000",
      bg: "bg-emerald-200",
      primaryBg: "bg-emerald-300",
    },
  },
  {
    id: "about",
    description: "",
    color: {
      text: "#000",
      bg: "bg-red-200",
      primaryBg: "bg-red-300",
    },
  },
  {
    id: "random",
    description: "",
    color: {
      text: "#000",
      bg: "bg-green-200",
      primaryBg: "bg-green-300",
    },
  },
  {
    id: "password-generator",
    description: "",
    color: {
      text: "#000",
      bg: "bg-blue-200",
      primaryBg: "bg-blue-300",
    },
  },
  {
    id: "countdown",
    description: "",
    color: {
      text: "#000",
      bg: "bg-blue-200",
      primaryBg: "bg-blue-300",
    },
  },
  {
    id: "magic-wheel",
    description: "",
    color: {
      text: "#000",
      bg: "bg-blue-200",
      primaryBg: "bg-blue-300",
    },
  },
];

export const defaultBlock: Block = dynamicBlocks[0];

/**************************************************************************
 *
 *     Empty blocks
 *
 *************************************************************************/

export const emptyBlock: Block = {
  id: emptyId,
  description: "Empty block",
  color: {
    text: "#000",
    bg: "bg-gray-200",
    primaryBg: "bg-gray-300",
  },
};

/**************************************************************************
 *
 *     Side blocks
 *
 *************************************************************************/

export const sideBlocks: Block[] = [
  {
    id: "left",
    description: "",
    color: {
      text: "#000",
      bg: "bg-red-200",
      primaryBg: "bg-red-300",
    },
  },
  {
    id: "right",
    description: "",
    color: {
      text: "#000",
      bg: "bg-yellow-200",
      primaryBg: "bg-yellow-300",
    },
  },
];

export const sideBlocksProps = sideBlocks.map((block) => ({
  bgColor: block.color.bg,
  layoutId: block.id,
}));

/**************************************************************************
 *
 *     Last block (which is used for block #16)
 *
 *************************************************************************/

export const lastBlock: Block = {
  id: "lastBlock",
  description: "",
  color: {
    text: "#000",
    bg: "bg-gray-200",
    primaryBg: "bg-gray-300",
  },
};
