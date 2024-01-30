/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type { Block, DateTimeLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const DATE_TIME_CALCULATOR: Block<DateTimeLayoutId> = {
  id: "date-time-calculator",
  icon: "/date-time-calculator.svg",
  title: "Date/Time Calculator",
  description: "Calculate date and time",
  to: "/date-time/calculator",
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
