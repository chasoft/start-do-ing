export const BREAKPOINTS = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
] as const;

export type BREAKPOINT_TYPE = (typeof BREAKPOINTS)[number];

export type BlockId =
  | "home"
  | "about"
  | "random"
  | "password-generator"
  | "countdown"
  | "magic-wheel"
  | "404"
  | "left"
  | "right";

export type Block = {
  id: BlockId;
  description: string;
  color: {
    text: string;
    bg: string;
    primaryBg: string;
  };
};

export const BLOCKS: Block[] = [
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
] as const;

export const EMPTY_ID: BlockId = "404";

export const EMPTY_BLOCK: Block = {
  id: EMPTY_ID,
  description: "Empty block",
  color: {
    text: "#000",
    bg: "bg-gray-200",
    primaryBg: "bg-gray-300",
  },
};

export const SIDE_BLOCKS: Block[] = [
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

export const SIDE_BLOCKS_PROPS = SIDE_BLOCKS.map((block) => ({
  bgColor: block.color.bg,
  layoutId: block.id,
}));

export type TLayoutId = (typeof BLOCKS)[number]["id"];

export type TRouteHandle = Partial<{
  layoutId: TLayoutId;
}>;

export function getBlocks() {
  const breaks: Record<BREAKPOINT_TYPE, boolean> = {
    xs: window.matchMedia("(max-width: 400px)").matches,
    sm: window.matchMedia("(max-width: 640px)").matches,
    md: window.matchMedia("(max-width: 768px)").matches,
    lg: window.matchMedia("(max-width: 1024px)").matches,
    xl: window.matchMedia("(max-width: 1280px)").matches,
    "2xl": window.matchMedia("(max-width: 1536px)").matches,
    "3xl": window.matchMedia("(max-width: 1800px)").matches,
  };

  return [
    // Row 1
    BLOCKS[0],
    BLOCKS[1],
    BLOCKS[2],
    ...(breaks.xs || breaks.sm ? [EMPTY_BLOCK, EMPTY_BLOCK, EMPTY_BLOCK] : []),
    ...(breaks.md ? [EMPTY_BLOCK, EMPTY_BLOCK] : []),
    ...(breaks["2xl"] ? [EMPTY_BLOCK] : []),
    ...(BLOCKS[3] ? [BLOCKS[3]] : [EMPTY_BLOCK]),
    ...(BLOCKS[4] ? [BLOCKS[4]] : [EMPTY_BLOCK]),
    ...(BLOCKS[5] ? [BLOCKS[5]] : [EMPTY_BLOCK]),
    // Row 3
    ...(BLOCKS[6] ? [BLOCKS[6]] : [EMPTY_BLOCK]),
    ...(BLOCKS[7] ? [BLOCKS[7]] : [EMPTY_BLOCK]),
    ...(BLOCKS[8] ? [BLOCKS[8]] : [EMPTY_BLOCK]),
    ...(breaks.xs || breaks.sm ? [EMPTY_BLOCK, EMPTY_BLOCK, EMPTY_BLOCK] : []),
    ...(breaks.md ? [EMPTY_BLOCK, EMPTY_BLOCK] : []),
    ...(breaks["2xl"] ? [EMPTY_BLOCK] : []),
    ...(BLOCKS[9] ? [BLOCKS[9]] : [EMPTY_BLOCK]),
    ...(BLOCKS[10] ? [BLOCKS[10]] : [EMPTY_BLOCK]),
    ...(BLOCKS[11] ? [BLOCKS[1]] : [EMPTY_BLOCK]),
  ];
}
