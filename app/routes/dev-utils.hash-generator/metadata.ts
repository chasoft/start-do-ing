/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_HASH_GENERATOR: Block<DevUtilsLayoutId> = {
  id: "dev-utils-hash-generator",
  icon: "/dev-utils-hash-generator.svg",
  title: "Hash Generator",
  description: "Calculate has (MD5, SHA-1, SHA-256, SHA-512)",
  to: "/dev-utils/hash-generator",
  group: [],
  favorite: false,
  color: {
    text: "#000",
    primaryBg: "bg-rose-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
