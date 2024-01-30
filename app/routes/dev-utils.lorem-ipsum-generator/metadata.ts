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

export const DEV_UTILS_LOREM_IPSUM_GENERATOR: Block<DevUtilsLayoutId> = {
  id: "dev-utils-lorem-ipsum-generator",
  icon: "/dev-utils-lorem-ipsum-generator.svg",
  title: "Lorem Ipsum Generator",
  description: "Dummy text for your design",
  to: "/dev-utils/lorem-ipsum-generator",
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
