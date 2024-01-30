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

export const DATE_TIME_ANALOG_CLOCK: Block<DateTimeLayoutId> = {
  id: "date-time-analog-clock",
  icon: "/date-time-analog-clock.svg",
  title: "Analog Clock",
  description: "Just a traditional clock",
  to: "/date-time/analog-clock",
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