/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "./types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { SITE, DEFAULT_SHARING_IMAGE } from "~/data";

/***************************************************************************
 *
 *  HOOKS
 *
 **************************************************************************/

export function getUrlSharingData(block: Block<unknown>) {
  return {
    title: block.title,
    description: block.description,
    url: `${SITE.url}${block.to}?full=true`,
    image: block.image ?? DEFAULT_SHARING_IMAGE,
  };
}
