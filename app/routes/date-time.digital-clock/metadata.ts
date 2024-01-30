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

export const DATE_TIME_DIGITAL_CLOCK: Block<DateTimeLayoutId> = {
  id: "date-time-digital-clock",
  icon: "/date-time-digital-clock.svg",
  title: "Digital Clock",
  description: "Modern digital clock",
  to: "/date-time/digital-clock",
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