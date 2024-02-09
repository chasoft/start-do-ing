/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DevUtilsLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from '@tabler/icons-react';

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS_MARKDOWN_EDITOR: Block<DevUtilsLayoutId> = {
  id: "dev-utils-markdown-editor",
  icon: { data: <IconAlertTriangle />, color: "#000" },
  title: "Markdown Editor",
  description: "Quick editor your web-browser",
  to: "/dev-utils/markdown-editor",
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
