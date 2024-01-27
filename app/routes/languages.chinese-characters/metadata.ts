/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LanguagesLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES_CHINESE_CHARACTERS: Block<LanguagesLayoutId> = {
  id: "chinese-characters",
  icon: "/chinese-characters.svg",
  title: "Chinese Characters",
  description: "",
  to: "/languages/chinese-characters",
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
