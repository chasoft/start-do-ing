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

export const DEV_UTILS_SQL_FORMATTER: Block<DevUtilsLayoutId> = {
  id: "dev-utils-sql-formatter",
  icon: "/dev-utils-sql-formatter.svg",
  title: "SQL Formatter",
  description: "Beautify your SQL queries",
  to: "/dev-utils/sql-formatter",
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
