/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DashboardLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SETTINGS: Block<DashboardLayoutId> = {
  id: "settings",
  icon: "/settings.svg",
  title: "Settings",
  description: "",
  to: "/dashboard/settings",
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
