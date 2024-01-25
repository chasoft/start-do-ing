/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DASHBOARD_LAYOUT: Block = {
  id: "dashboard",
  icon: "/dashboard.svg",
  title: "Dashboard",
  description: "",
  to: "/dashboard",
  group: [],
  favorite: true,
  color: {
    text: "#000",
    primaryBg: "bg-green-200",
  },
  versioning: {
    releaseDate: new Date("2023/01/17"),
    major: 0,
    minor: 1,
  },
};
