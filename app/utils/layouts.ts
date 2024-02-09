import {
  EMPTY_BLOCK,
  SITE,
  firstBlockOfRow1,
  firstBlockOfRow2,
  firstBlockOfRow3,
} from "~/data";
import type { Block, Breakpoint, PageId } from "./types";

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

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

export function getEmptyBlocksInsertionIndexes() {
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
}

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
function getEmptyBlocks() {
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
}

/**
 * Ensure blockList has at least 21 blocks
 */
export function getDynamicBlocks(blocks: Block<PageId>[]) {
  const minLength = 21;
  const numberOfMissingBlocks = minLength - blocks.length;
  return numberOfMissingBlocks > 0
    ? blocks.concat(new Array(numberOfMissingBlocks).fill(EMPTY_BLOCK))
    : blocks;
}

/**
 * Main function to get a list of blocks to be populated in the layout
 */
export function getBlocks(
  blocks: Block<PageId>[],
  selectedLayoutId: PageId
): Block<PageId>[] {
  const emptyBlocks = getEmptyBlocks();
  const dynamicBlocks = getDynamicBlocks(blocks).filter(
    (block) => block.id !== selectedLayoutId
  );
  const idxes = getEmptyBlocksInsertionIndexes();
  return idxes
    ? ([] as Block<PageId>[]).concat(
        dynamicBlocks.slice(idxes[0][0], idxes[0][1]),
        emptyBlocks,
        dynamicBlocks.slice(idxes[1][0], idxes[1][1]),
        emptyBlocks,
        dynamicBlocks.slice(idxes[2][0])
      )
    : dynamicBlocks;
}

export function getBlockMetaData(blocks: Block<PageId>[], id: PageId) {
  const block = blocks.find((b) => b.id === id);
  return block
    ? { title: `${SITE.title} - ${block.title}`, desc: block.description }
    : { title: SITE.title, description: SITE.description };
}

/**
 * Note: first item will be removed by default
 */
export function getMenuItemsFromBlocks(blocks: Block<unknown>[]) {
  return blocks
    .map((block) => ({
      title: block.title,
      to: block.to,
      icon: block.icon
    }))
    .slice(1);
}

export const isFirstRow = (blockIndex: number) => blockIndex < firstBlockOfRow2;

export const isFirstCell = (blockIndex: number) =>
  blockIndex === firstBlockOfRow1;

export const isFirstCellOfRow3 = (blockIndex: number) =>
  blockIndex === firstBlockOfRow3;

export const getDropdownPosition = (blockIndex: number) =>
  isFirstRow(blockIndex)
    ? "bottom-right"
    : isFirstCellOfRow3(blockIndex)
    ? /**
       * `top-left` is a little tricky here.
       * just a way to set different dropdown positions.
       */
      "top-left"
    : "top-right";
