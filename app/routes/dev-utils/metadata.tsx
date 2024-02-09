/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconAlertTriangle } from '@tabler/icons-react';

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DEV_UTILS: Block<"dev-utils"> = {
  id: "dev-utils",
  icon: { data: <IconAlertTriangle />, color: "#000" },
  title: "Dev Utils",
  description: "Utils for web development",
  to: "/dev-utils",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-fuchsia-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
