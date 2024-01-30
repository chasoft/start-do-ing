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

export const DEV_UTILS_STRING_CONVERTER: Block<DevUtilsLayoutId> = {
  id: "dev-utils-string-converter",
  icon: "/dev-utils-string-converter.svg",
  title: "String Converter",
  description: "String utils",
  to: "/dev-utils/string-converter",
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
