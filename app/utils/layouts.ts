import { Breakpoint } from ".";
import { DYNAMIC_BLOCKS, EMPTY_BLOCK, SITE } from "~/constants";
import type { Block, LayoutId } from "./types";

export function getMediaBreakpoint(): [Breakpoint, boolean] {
  const defaultBreakpointForServer: [Breakpoint, boolean] = ["3xl", true];
  if (typeof window === "undefined") return defaultBreakpointForServer;
  return window.matchMedia("(min-width: 1800px)").matches
    ? ["3xl", true]
    : window.matchMedia("(min-width: 1536px)").matches
    ? ["2xl", true]
    : window.matchMedia("(min-width: 1280px)").matches
    ? ["xl", true]
    : window.matchMedia("(min-width: 1024px)").matches
    ? ["lg", true]
    : window.matchMedia("(min-width: 768px)").matches
    ? ["md", true]
    : window.matchMedia("(min-width: 640px)").matches
    ? ["sm", true]
    : ["xs", true];
}

export const getEmptyBlocksInsertionIndexes = () => {
  const breakpoint = getMediaBreakpoint()[0];
  switch (breakpoint) {
    case "xs":
    case "sm":
      /**
       * Design: [0, 1, 2, ⬇️, 3, 4, 5, ⬇️, ...]
       * Insert 3 empty blocks to ensure that Row 1 and Row 3 always have 7 blocks.
       */
      return [[0, 3], [3, 6], [6]];
    case "md":
    case "lg":
    case "xl":
      /**
       * Design: [0, 1, 2, 3, ⬇️, 4, 5, 6, 7, ⬇️, ...]
       * Insert 2 empty blocks to ensure that Row 1 and Row 3 always have 7 blocks.
       */
      return [[0, 4], [4, 8], [8]];
    case "2xl":
      /**
       * Design: [0, 1, 2, 3, 4, ⬇️, 5, 6, 7, 8, 9, ⬇️, ...]
       * Insert 1 empty blocks to ensure that Row 1 and Row 3 always have 7 blocks.
       */
      //
      return [[0, 5], [5, 10], [10]];
    default:
      /**
       * Don't need to insert any empty blocks
       */
      return null;
  }
};

/**
 * Layout explanation:
 *
 * Row 1: [01, 01, 02, 03, 04, 05, 06] (7 cols - 6 blocks)
 * Row 2: [07, 08, 08, 08, 08, 08, 09] (7 cols - 3 blocks)
 * Row 3: [10, 11, 12, 13, 14, 15, 16] (7 cols - 7 blocks)
 *
 * Fixd blocks: 07, 09 (Row 2) and 16 (Row 3)
 * Other blocks are dynamic blocks
 *
 * For each for responsive breakpoint, we need to add empty blocks
 * to ensure that Row 1 and Row 3 always have 7 blocks.
 */
const getEmptyBlocks = () => {
  const [breakpoint] = getMediaBreakpoint();
  switch (breakpoint) {
    case "xs":
    case "sm":
      return [EMPTY_BLOCK, EMPTY_BLOCK, EMPTY_BLOCK];
    case "md":
    case "lg":
    case "xl":
      return [EMPTY_BLOCK, EMPTY_BLOCK];
    case "2xl":
      return [EMPTY_BLOCK];
    default:
      return [];
  }
};

/**
 * Ensure blockList has at least 21 blocks
 */
export const getDynamicBlocks = () => {
  const minLength = 21;
  const numberOfMissingBlocks = minLength - DYNAMIC_BLOCKS.length;
  return numberOfMissingBlocks > 0
    ? DYNAMIC_BLOCKS.concat(new Array(numberOfMissingBlocks).fill(EMPTY_BLOCK))
    : DYNAMIC_BLOCKS;
};

/**
 * Main function to get a list of blocks to be populated in the layout
 */
export function getBlocks(selectedLayoutId: LayoutId): Block[] {
  const emptyBlocks = getEmptyBlocks();
  const blocks = getDynamicBlocks().filter(
    (block) => block.id !== selectedLayoutId
  );
  const idxes = getEmptyBlocksInsertionIndexes();
  return idxes
    ? ([] as Block[]).concat(
        blocks.slice(idxes[0][0], idxes[0][1]),
        emptyBlocks,
        blocks.slice(idxes[1][0], idxes[1][1]),
        emptyBlocks,
        blocks.slice(idxes[2][0])
      )
    : blocks;
}

export const getBlockMetaData = (id: LayoutId) => {
  const block = DYNAMIC_BLOCKS.find((b) => b.id === id);
  return block
    ? { title: `${SITE.title} - ${block.title}`, desc: block.description }
    : { title: SITE.title, description: SITE.description };
};
