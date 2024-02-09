/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, LanguagesLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from '@tabler/icons-react';

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const LANGUAGES_VIETNAMESE_READING_FOR_KIDS: Block<LanguagesLayoutId> = {
  id: "vietnamese-reading-for-kids",
  icon: { data: <IconAlertTriangle />, color: "#000" },
  title: "Vietnamese Reading for Kids",
  description: "Helps your kids to read Vietnamese words",
  to: "/languages/vietnamese-reading-for-kids",
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
